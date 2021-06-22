/**
 * @description holds server main
 */

// configuring environment variables
require('dotenv').config();

// creating apollo server
const apolloServer = require("./graphql.ts");

const port = process.env.PORT;

// start listening
apolloServer.listen(port).then(({ url }) => {
  console.log(`Apollo Server is running on ${url} `);
});
