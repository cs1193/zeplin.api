const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

function isAuthenticated (req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (!token) {
    res.status(401);
    res.send({
      status: false,
      message: 'Not Authorized'
    });
  } else {
    jsonwebtoken.verify(token, (process.env.SECRET_KEY || 'zeplin.api'), (error, decoded) => {
      if (error) {
        return res.send(401).json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
}

module.exports = isAuthenticated;
