import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/index";
import { schema } from "./schemas/index";
import { context } from "./context";

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