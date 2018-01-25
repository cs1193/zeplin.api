const express = require('express');
const ColumnController = require('../controllers/column');
const isAuthenticated = require('../middleware/authentication');

const router = express.Router();

router.route('/')
  .get(isAuthenticated, ColumnController.getColumns)
  .post(isAuthenticated, ColumnController.createColumn);

router.route('/:id')
  .get(isAuthenticated, ColumnController.getColumnById)
  .put(isAuthenticated, ColumnController.updateColumnById)
  .delete(isAuthenticated, ColumnController.removeColumnById);

router.get('/board/:boardId', isAuthenticated, ColumnController.getColumnsByBoardId);


module.exports = router;
