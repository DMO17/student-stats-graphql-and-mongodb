const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const resolvers = require("./resolvers");
const typeDefs = require("./schema");

const server = new ApolloServer({ typeDefs, resolvers });

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentStatsDb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("[INFO]: Successfully connected to the database");

    const { url } = await server.listen();

    console.log(`[INFO]: server running on ${url}`);
  } catch (error) {
    console.log(
      `[ERROR]: Failed to connected to the database | ${error.message}`
    );
  }
};
init();
