`use strict`;
const { MongoClient } = require("mongodb");
const env = require("./.env");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = env.mongo.url;
const client = new MongoClient(url);

// Database Name
// const dbName = "Project0";

async function mongoMain() {
  // Use connect method to connect to the server
  await client.connect();
  console.log("Connected successfully to server");
  //   const db = client.db(dbName);
  //   const collection = db.collection("Cluster0");

  // the following code examples can be pasted here...

  //   return "done.";
  return client;
}

module.exports = { mongoMain };
