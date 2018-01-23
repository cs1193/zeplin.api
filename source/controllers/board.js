const Board = require('../models/board');

function getBoards(req, res) {
  Board.find({}, (error, boards) => {
    if (error) return res.status(500).send(`There was a problem finding the boards.`);
    res.status(200).send(boards);
  });
}

function createBoard(req, res) {
  Board.create({
    name: req.body.name
  }, (error, board) => {
    if (error) return res.status(500).send(`There was a problem adding the information to the database.`);
    res.status(200).send(board);
  });
}

function getBoardById(req, res) {
  Board.findById(req.params.id, (error, board) => {
    if (error) return res.status(500).send(`There was a problem finding the board.`);
    if (!board) return res.status(404).send(`No board found.`);
    res.status(200).send(board);
  });
}

function removeBoardById(req, res) {
  Board.findByIdAndRemove(req.params.id, (error, board) => {
    if (error) return res.status(500).send(`There was a problem deleting the board.`);
    res.status(200).send(`Board ${board} was deleted.`);
  });
}

function updateBoardById(req, res) {
  Board.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, board) => {
    if (error) return res.status(500).send(`There was a problem updating the board.`);
    res.status(200).send(board);
  });
}

module.exports = {
  getBoards: getBoards,
  createBoard: createBoard,
  getBoardById: getBoardById,
  updateBoardById: updateBoardById,
  removeBoardById: removeBoardById
};
