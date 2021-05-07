`use strict`;

const express = require("express");
const app = express();
const port = 5000;
const config = require("./config/.env");
const { User } = require("./models/user");
const bodyParser = require("body-parser");

//for data parsing
//application x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//#1
const mongo = require("mongoose");
console.log(`trying to mongo connecting...`);
mongo
  .connect(config.mongo.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

app.get("/", (req, res) => {
  res.send("express started");
});
app.post("/", (rea, res) => {
  const user = new User();
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});
app.listen(port, () => console.log(`svr listening on port ${port}`));
