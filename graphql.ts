import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers/index";
import { schema } from "./schemas/index";
import { context } from "./context";
import { AuthenticationError } from 'apollo-server-errors';


/**
 * @description holds and creates apollo server
 */

const apolloServer = new ApolloServer({
  typeDefs: schema,
  resolvers,
  plugins: [
    {
      requestDidStart() {
        return {
          didEncounterErrors({ response, errors }) {
            if (errors.find(err => err instanceof AuthenticationError)) {
              console.log('401 ERROR')
            }
          }
        }
      },
    },
  ],
  context: context,
  playground: {
    endpoint: "/graphql"
  },
  introspection: true
});

export default apolloServer;