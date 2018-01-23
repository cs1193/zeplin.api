const mongoose = require('mongoose');
const connection = require('../connection');

const BoardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  columnCount: {
    type: Number
  },
  columns: {
    type: Object
  }
}, {timestamps: true});

connection.model('Board', BoardSchema);

module.exports = connection.model('Board');
