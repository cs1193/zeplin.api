const jsonwebtoken = require('jsonwebtoken');
const User = require('../models/user');

function authenticateUser(req, res) {
  User.findOne({
    email: req.body.email
  }, (error, user) => {
    if (error) throw error;

    if (!user) {
      res.status(401).json({
        status: 'failed',
        message: 'Authentication Failed. User not found'
      });
    } else if (user) {
      if (user.password != req.body.password) {
        res.status(401).json({
          status: 'failed',
          message: 'Authentication Failed. Wrong Password.'
        });
      } else {
        const payload = {
          admin: user.admin
        }

        var token = jsonwebtoken.sign(payload, (process.env.SECRET_KEY || 'zeplin.api'), {
          expiresIn: 1440
        });

        var date = new Date();

        res.json({
          status: 'success',
          message: 'User Authenticated',
          token: token,
          tokenExpiration: new Date(date.getTime() + 1440 * 60000)
        })
      }
    }
  });
}

module.exports = {
  authenticateUser: authenticateUser
}
