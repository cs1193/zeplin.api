const User = require('../models/user');

function setupAdmin(req, res) {
  User.create({
    name: 'Admin',
    email: 'admin@zeplin.dev',
    password: 'password',
    admin: true
  }, (error, user) => {
    if (error) return res.status(500).send(`There was a problem adding the information to the database.`);
    res.status(200).send(user);
  });
}

module.exports = {
  setupAdmin: setupAdmin
}
