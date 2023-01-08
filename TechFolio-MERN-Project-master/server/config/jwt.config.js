const jwt = require("jsonwebtoken");
const { User } = require('../models/user.model');
const SECRET_KEY = "portfolio";

module.exports.SECRET_KEY = SECRET_KEY;

module.exports.authenticate = (request, response, next) => {
  jwt.verify(request.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) { 
        response.status(401).json({verified: false});
    } else {
      next();
    }
  });
}



