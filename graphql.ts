import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/index.js";
import { schema } from "./schemas/index.js";
import { context } from "./context.js";

/**
 * @description holds and creates apollo server
 */

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: context,
  playground: {
    endpoint: "/graphql"
  },
  introspection: true
});

export default apolloServer;