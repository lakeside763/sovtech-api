import { GraphqlContext } from '../../models/datasources.model';
import { Resolvers, QueryGetPeopleListArgs, QueryGetPersonByIdArgs } from '../resolver-types';


const swapiResolver: Resolvers = {
  Query: {
    getPeopleList: async (parent: unknown, { input }: QueryGetPeopleListArgs, { dataSources }: GraphqlContext) => {
      try {
        return await dataSources.swapi.getPeople(input);
      } catch (error) {
        return error
      }
    },
    getPersonById: async (parent: unknown, { id }: QueryGetPersonByIdArgs, { dataSources }: GraphqlContext) => {
      try {
        return await dataSources.swapi.getPerson(id)
      } catch (error) {
        return error;
      }
    }
  }
}

export default swapiResolver;