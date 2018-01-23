const mongoose = require('mongoose');
const connection = require('../connection');

const CardSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  image: {
    type: String
  },
  commentCount: {
    type: Number
  },
  completedTask: {
    type: Number
  },
  totalTask: {
    type: Number
  },
  sharedProfile: {
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
