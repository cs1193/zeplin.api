const mongoose = require('mongoose');
const connection = require('../connection');

const ColumnSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  cardCount: {
    type: Number
  },
  boardId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Board'
  },
  color: {
    type: String
  }
}, {timestamps: true});

connection.model('Column', ColumnSchema);

module.exports = connection.model('Column');
