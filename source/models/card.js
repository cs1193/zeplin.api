const mongoose = require('mongoose');
const connection = require('../connection');

const CardSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  image: {
    type: String
  },
  comment: {
    type: Number
  },
  taskCompleted: {
    type: Number
  },
  taskTotal: {
    type: Number
  },
  shared: {
    type: Object
  },
  remainder: {
    type: Date
  },
  columnId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Column'
  }
}, {timestamps: true});

connection.model('Card', CardSchema);

module.exports = connection.model('Card');
