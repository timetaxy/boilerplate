const { User } = require("../models/user");

let auth = (req, res, next) => {
  //todo : auth process
  //todo : get token from client cookie
  let token = req.cookies.x_auth;
  //todo : decrypt token and search user
  User.findByToken(token, (err, user) => {
    //todo : if user exist, auth success response
    //todo : if user doesnt exist, auth fail response
    if (err) throw err;
    if (!user) return res.js({ isAuth: false, error: true });
    req.token = token;
    req.user = user;
    next();
  });
};
module.exports = { auth };
