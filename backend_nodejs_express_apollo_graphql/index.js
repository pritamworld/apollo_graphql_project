const mongoose = require('mongoose');
const cors = require('cors');
//import ApolloServer
const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { loadFiles } = require('@graphql-tools/load-files')

const schema = require("./schema")
const resolver = require("./resolvers/movie/resolvers")

//Store sensitive information to env variables
const dotenv = require('dotenv');
dotenv.config();

//mongoDB Atlas Connection String
const mongodb_atlas_url = process.env.MONGODB_URL;

//TODO - Replace you Connection String here
const connectDB = async() => {
    try{
      mongoose.connect(mongodb_atlas_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }).then(success => {
        console.log('Success Mongodb connection')
      }).catch(err => {
        console.log('Error Mongodb connection')
      });
    } catch(error) {
        console.log(`Unable to connect to DB : ${error.message}`);
      }
  }

//Define Apollo Server
// const server = new ApolloServer({
//   typeDefs: schema, //Schema
//   resolvers: resolver //Resolver
// })

//Start Apollo Server
let startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs: await loadFiles('./typeDefs/**/*.graphql'), //Schema
    resolvers: resolver //Resolver
  })
  const { url } = await startStandaloneServer(server, { listen: { port: process.env.PORT }});
  
  console.log(`🚀 Server ready at: ${url}`);
  //console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`)
  connectDB()
}

startApolloServer()
