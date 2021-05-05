`use strict`;

const express = require("express");
const app = express();
const port = 5000;
// const mongoose = require('mongoose')

const { MongoClient } = require("mongodb");
const env = require("./.env");
const uri = env.mongo.uri;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .withSession(() => console.log("mongo arrived"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("express started");
});
app.listen(port, () => console.log(`svr listening on port ${port}`));

// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
