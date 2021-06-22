/**
 * @description holds server main
 */

// configuring environment variables
require('dotenv').config();

// creating apollo server
const apolloServer = require("./graphql");

const port: string = process.env.PORT as string;

// start listening
apolloServer.listen(port).then(({ url }) => {
  console.log(`Apollo Server is running on ${url} `);
});
