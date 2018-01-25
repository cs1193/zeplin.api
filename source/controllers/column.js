const Column = require('../models/column');

function getColumns(req, res) {
  Column.find({}, (error, columns) => {
    if (error) return res.status(500).send(`There was a problem finding the columns.`);
    res.status(200).send(columns);
  });
}

function createColumn(req, res) {
  Column.create({
    name: req.body.columnData.name,
    color: req.body.columnData.color,
    boardId: req.body.boardId,
  }, (error, column) => {
    if (error) return res.status(500).send(`There was a problem adding the information to the database.`);
    res.status(200).send(column);
  });
}

function getColumnById(req, res) {
  Column.findById(req.params.id, (error, column) => {
    if (error) return res.status(500).send(`There was a problem finding the column.`);
    if (!column) return res.status(404).send(`No column found.`);
    res.status(200).send(column);
  });
}

function removeColumnById(req, res) {
  Column.findByIdAndRemove(req.params.id, (error, column) => {
    if (error) return res.status(500).send(`There was a problem deleting the column.`);
    res.status(200).send(`Column ${column} was deleted.`);
  });
}

function updateColumnById(req, res) {
  Column.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, column) => {
    if (error) return res.status(500).send(`There was a problem updating the column.`);
    res.status(200).send(column);
  });
}

function getColumnsByBoardId(req, res) {
  Column.find({
    boardId: req.params.boardId
  }, (error, columns) => {
    if (error) return res.status(500).send(`There was a problem finding the columns.`);
    res.status(200).send(columns);
  })
}

module.exports = {
  getColumns: getColumns,
  createColumn: createColumn,
  getColumnById: getColumnById,
  updateColumnById: updateColumnById,
  removeColumnById: removeColumnById,
  getColumnsByBoardId: getColumnsByBoardId
};
