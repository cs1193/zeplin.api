const express = require('express');
const BoardController = require('../controllers/board');
const isAuthenticated = require('../middleware/authentication');

const router = express.Router();


router.route('/')
  .get(isAuthenticated, BoardController.getBoards)
  .post(isAuthenticated, BoardController.createBoard);

router.route('/:id')
  .get(isAuthenticated, BoardController.getBoardById)
  .put(isAuthenticated, BoardController.updateBoardById)
  .delete(isAuthenticated, BoardController.removeBoardById);



module.exports = router;
