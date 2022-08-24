import supertest from "supertest";
import { app, server, cache } from '../server';
import SwapiDatasource from "../datasources/swapi.datasource";
import mockData from './mock_data.json';


const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });
}

startApolloServer();

const apolloClient = async ({ ...params }) => {
  return await supertest(app).post('/graphql').set('Accept', 'application/json').send(params);
}

const peopleListMock = jest.fn(() => {
  return Promise.resolve(mockData);
})


const personMock = jest.fn(() => {
  return Promise.resolve(true);
})

const personDataMock = jest.fn(() => {
  const response = {
    "id": 1,
    "name": "Luke Skywalker",
    "mass": "77",
    "url": "https://swapi.dev/api/people/1/",
    "eye_color": "blue"
  }
  return Promise.resolve(response);
})

export const personFragment =`
  fragment personFields on Person {
    id
    name
    mass
    height
    hair_color
    eye_color
    skin_color
    gender
    homeworld
    url
    birth_year
  }
`;


const getPeopleListQuery = `
query GetPeopleList($page: Int, $search: String) {
  getPeopleList(input: {
    page: $page
    search: $search
  }) {
    count
    previous
    next
    people {
      ...personFields
    }
  }
}
  ${personFragment}
`;

const getPersonByIdQuery = `
  query GetPersonById($id: Int!) {
    getPersonById(id: $id) {
      ...personFields
    }
  }
  ${personFragment}
`;


describe('swapi test', () => {
  beforeAll(() => {
    jest.spyOn(SwapiDatasource.prototype, 'getPeople').mockImplementation(peopleListMock);
    jest.spyOn(SwapiDatasource.prototype, 'getPerson').mockImplementation(personDataMock);
  });

  afterAll(async() => {
    await server.stop();
    jest.restoreAllMocks();
    // await cache.close();
  });

  // afterEach(async () => {
  //   jest.restoreAllMocks();
  //   await cache.close();
  //   await server.stop()
  // });
  
  test('should fetch the first set list of people without parameter', async () => {
    const { statusCode, body: { data: { getPeopleList } } } = await apolloClient({ query: getPeopleListQuery });
    expect(statusCode).toBe(200);
    expect(getPeopleList).toHaveProperty('count'),
    expect(getPeopleList.people).toHaveLength(10);
  });

  test('should fetch the list of people by page', async () => {
    const { statusCode, body: { data: { getPeopleList } } } = await apolloClient({ 
      query: getPeopleListQuery,
      variables: { page: 2 },
    });
    expect(statusCode).toBe(200);
    expect(getPeopleList).toHaveProperty('count'),
    expect(getPeopleList.people).toHaveLength(10);
    expect(getPeopleList.people).toHaveProperty('0.id');
  });

  test('should fetch a person that by ID', async () => {
    const { statusCode, body: { data: { getPersonById } } } = await apolloClient({
      query: getPersonByIdQuery,
      variables: { id: 1 },
    });
    expect(statusCode).toBe(200);
    expect(getPersonById).toHaveProperty('id', 1);
  });
});



export const mockJestoutput = jest.fn(() => {
  const response = {
    'id': 1
  }
  return Promise.resolve(response)
})

jest.spyOn(SwapiDatasource.prototype, 'getPeople').mockImplementation(mockJestoutput);


