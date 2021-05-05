`use strict`;

const express = require("express");
const app = express();
const port = 5000;
// const env = require("./.env");

// const mongoose = require('mongoose')
// const uri = env.mongo.uri;
// const mongoClient = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .withSession(() => console.log("mongo arrived"))
//   .then(() => console.log("mongo connected"))
//   .catch((err) => console.log(err));

const { mongoClient, listDatabases } = require("./db");
mongoClient().then((conn) => listDatabases(conn));

app.get("/", (req, res) => {
  res.send("express started");
});
app.listen(port, () => console.log(`svr listening on port ${port}`));
