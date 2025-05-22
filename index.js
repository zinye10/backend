// index.js
const sequelize = require('./config/database');
const { ApolloServer } = require('apollo-server-express');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require('./typeDefs/typedefs_users');
const resolvers = require('./resolvers/resolver_user');
const express = require('express');
const getUserFromToken = require('./auth');

const server = new ApolloServer({ typeDefs, resolvers,
  context: ({req}) => {
    const token = req.headers.authorization || '';
    const user = getUserFromToken(token);
    return {user}
  }
 });

const app = express(); 
server.start().then(() => { 
  server.applyMiddleware({ app }); 
  app.listen({ port: 4000 }, () => 
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`) 
  ); 
});

/*
// index.js
async function main() {
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
      });
      
      console.log(`🚀  Server ready at: ${url}`);
}

main();*/



// Your server logic here (e.g., Express.js, Apollo Server, etc.)
