`use strict`;

const express = require("express");
const app = express();
const port = 5000;
const env = require("./.env");

//#1
const mongo = require("mongoose");
console.log(`trying to mongo connecting...`);
mongo
  .connect(env.mongo.uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongo arrived");
  })
  .catch((err) => console.log(err));
//   .withSession(() => console.log("mongo arrived"))
//   .then(() => console.log("mongo connected"))
//   .catch((err) => console.log(err));

//#2
// const { connTest, mongoClient, listDatabases } = require("./db");
// const mongoClient = new MongoClient(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
// mongoClient().then((conn) => listDatabases(conn));
// connTest();

//#3
// const { mongoMain } = require("./backlog");
// mongoMain();

// app.get("/", (req, res) => {
//   res.send("express started");
// });
// app.listen(port, () => console.log(`svr listening on port ${port}`));
