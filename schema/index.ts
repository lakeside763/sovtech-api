import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true });

const resolversArray = fileLoader(path.join(__dirname, './**/*.resolver.ts'));
const resolvers = mergeResolvers(resolversArray);

export { 
  typeDefs, 
  resolvers 
};