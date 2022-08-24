import { Request, RESTDataSource } from 'apollo-datasource-rest';
import { UserInputError } from 'apollo-server-express';
import { Maybe } from 'graphql/jsutils/Maybe';
import { GetPeopleListInput } from '../schema/resolver-types'

class SwapiDatasource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/'
  }

  didEncounterError(error: Error, _request: Request): void {
    throw new UserInputError(error.message)
  }

  mapPeopleId(data: any[]) {
    return data.map(({ url, ...rest }) => {
      const splitUrl: any[] = url.split('/');
      const id = splitUrl[splitUrl.length - 2];
      return {
        id,
        ...rest
      }
    })
  }

  async getPeople(input: Maybe<GetPeopleListInput>) {
    const { page, search } = input || {}; 
    const queryString =  search ? `?search=${search}` : `?page=${page || 1}`;
    const { results, ...rest } = await this.get(`people/${queryString}`);
    return { ...rest, people: this.mapPeopleId(results) };
  }

  async getPerson(id: number) {
    const person = await this.get(`people/${id}`);
    if (!person) {
      throw new UserInputError("Invalid user id was provided");
    }
    return { ...person, id };
  }
}

export default SwapiDatasource;