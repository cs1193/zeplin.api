const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

function authenticateUser(req, res) {
  User.findOne({
    email: req.body.email
  }, (error, user) => {
    if (error) throw error;

    if (!user) {
      res.json({
        success: false,
        message: 'Authentication Failed. User not found'
      });
    } else if (user) {
      if (user.password != req.body.password) {
        res.json({
          success: false,
          message: 'Authentication Failed. Wrong Password.'
        });
      } else {
        const payload = {
          admin: user.admin
        }

        var token = jsonwebtoken.sign(payload, (process.env.SECRET_KEY || 'zeplin.api'), {
          expiresIn: 1440
        });

        res.json({
          success: true,
          message: 'User Authenticated',
          token: token
        })
      }
    }
  });
}

module.exports = {
  authenticateUser: authenticateUser
}
