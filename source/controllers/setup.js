const User = require('../models/user');
const Board = require('../models/board');
const Column = require('../models/column');
const Card = require('../models/card');

User.remove({});
Board.remove({});
Column.remove({});
Card.remove({});

const _ = require('lodash');

var COLOR_PICKER = [
  '#8fb83b',
  '#6e592c',
  '#2d0202',
  '#13a896',
  '#847ea1',
  '#d109e7',
  '#445e79',
  '#338239',
  '#bd8a0c',
  '#c41059'
];

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function setupAdmin(req, res) {
  var createdFlag = {
    user: false,
    board: false,
    column: false,
    card: false
  };

  var returnValue = {
    user: {},
    board: {},
    column: [],
    card: [],
  };

  var COLUMN_IDS = [];

  User.create({
    name: 'Admin',
    email: 'admin@zeplin.dev',
    password: 'password',
    admin: true
  }, (error, user) => {
    if (error) console.log(`There was a problem adding the information to the database.`);
    returnValue.user = user;

    Board.create({
      name: 'Example',
    }, (error, board) => {
      if (error) console.log(`There was a problem adding the information to the database.`);
      returnValue.board = board;

      for (var i = 0; i < _.random(2, 4); i++) {
        Column.create({
          name: _.sample(['Backlog', 'To Do', 'Done']),
          cardCount: 0,
          boardId: board._id,
          color: _.sample(COLOR_PICKER)
        }, (error, column) => {
          if (error) console.log(`There was a problem adding the information to the database.`);
          returnValue.column = column;

          for (var i = 0; i < _.random(2, 10); i++) {
            Card.create({
              text: _.sample(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Nullam id augue vel metus pretium luctus.', 'Aenean ut risus a ipsum luctus laoreet quis vitae tortor.', 'Fusce et libero nec mauris accumsan interdum ut a ligula.', 'Cras nec dui hendrerit, tempus urna eget, dapibus ex.']),
              description: _.sample(['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Nullam id augue vel metus pretium luctus.', 'Aenean ut risus a ipsum luctus laoreet quis vitae tortor.', 'Fusce et libero nec mauris accumsan interdum ut a ligula.', 'Cras nec dui hendrerit, tempus urna eget, dapibus ex.']),
              color: _.sample(COLOR_PICKER),
              columnId: column._id,
              taskCompleted: _.sample([1, 2, 3, 4, 5]),
              taskTotal: _.sample([5, 6, 7, 8, 9]),
              comment: _.random(5, 100),
              remainder: _.sample([randomDate(new Date(2017, 0, 1), new Date()), new Date(), ''])
            }, (error, column) => {
              if (error) console.log(`There was a problem adding the information to the database.`);
              console.log('Card Created');
            });
          }
        });
      }



    });


    if (returnValue.user || returnValue.board) {
      res.status(200).send(returnValue);
    }
  });



}

module.exports = {
  setupAdmin: setupAdmin
}
