const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');
const connection = require('../connection');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
  }
}, {timestamps: true});

connection.model('User', UserSchema);

module.exports = connection.model('User');
