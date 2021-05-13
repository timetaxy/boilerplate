`use strict`;

const express = require("express");
const app = express();
const port = 5000;
const config = require("./config/.env");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
// const { User } = require("./models/user");
// const { auth } = require("./middleware/auth");

//for data parsing
//application x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//#1
// const mongo = require("mongoose");
// console.log(`trying to mongo connecting...`);
// mongo
//   .connect(config.mongo.uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("mongo arrived");
//   })
//   .catch((err) => console.log(err));

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
app.get("/api/test", (req, res) => {
  res.send("axios test");
});
// app.post("/api/users/register", (req, res) => {
//   const user = new User(req.body);
//   user.save((err, userInfo) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).json({ success: true });
//   });
// });
// app.post("/api/users/login", (req, res) => {
//   //todo
//   //search exists, if exists check password, if password validated generate token

//   User.findOne({ email: req.body.email }, (err, user) => {
//     if (!user) {
//       return res.json({
//         loginSuccess: false,
//         message: "not exist from this email",
//       });
//     }
//     user.comparePassword(req.body.password, (err, isMatch) => {
//       if (!isMatch)
//         return res.json({ loginSuccess: false, message: "passwrod is false" });
//     });
//     user.generateToken((err, user) => {
//       if (err) return res.status(400).send(err);
//       res
//         .cookie("x_auth", user.token)
//         .status(200)
//         .json({ loginSuccess: true, userId: user._id });
//     });
//   });
// });
// app.get("/api/users/auth", auth, (req, res) => {
//   //until this, it is auth true
//   res.status(200).json({
//     _id: req.user._id,
//     isAdmin: req.user.role === 0 ? false : true,
//     isAuth: true,
//     email: req.user.emal,
//     name: req.user.name,
//     lastname: req.user.lastname,
//     role: req.user.role,
//     image: req.user.image,
//   });
// });
// app.get("/api/users/logout", auth, (req, res) => {
//   User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
//     if (err) return res.json({ success: false, err });
//     return res.status(200).send({
//       success: true,
//     });
//   });
// });
//if exist token, it is loged in
app.listen(port, () => console.log(`svr listening on port ${port}`));
