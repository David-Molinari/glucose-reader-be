const ApolloServer = require("apollo-server");
const resolvers = require("./resolvers");
const schema = require("./schemas");
const context = require("./context.ts");

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