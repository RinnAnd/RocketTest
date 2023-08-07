import { ApolloServer } from 'apollo-server';
import { typeDefs } from './api/schema.js';
import { resolvers } from './api/resolvers.js';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});