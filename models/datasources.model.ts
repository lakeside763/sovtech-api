import SwapiDatasource from "../datasources/swapi.datasource";

export interface GraphqlContext {
  dataSources: {
    swapi: SwapiDatasource
  }
}
