const Card = require('../models/card');

function getCards(req, res) {
  Card.find({}, (error, cards) => {
    if (error) return res.status(500).send(`There was a problem finding the cards.`);
    res.status(200).send(cards);
  });
}

function createCard(req, res) {
  Card.create({
    name: req.body.name
  }, (error, card) => {
    if (error) return res.status(500).send(`There was a problem adding the information to the database.`);
    res.status(200).send(card);
  });
}

function getCardById(req, res) {
  Card.findById(req.params.id, (error, card) => {
    if (error) return res.status(500).send(`There was a problem finding the card.`);
    if (!card) return res.status(404).send(`No card found.`);
    res.status(200).send(card);
  });
}

function removeCardById(req, res) {
  Card.findByIdAndRemove(req.params.id, (error, card) => {
    if (error) return res.status(500).send(`There was a problem deleting the card.`);
    res.status(200).send(`Card ${card} was deleted.`);
  });
}

function updateCardById(req, res) {
  Card.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, card) => {
    if (error) return res.status(500).send(`There was a problem updating the card.`);
    res.status(200).send(card);
  });
}

module.exports = {
  getCards: getCards,
  createCard: createCard,
  getCardById: getCardById,
  updateCardById: updateCardById,
  removeCardById: removeCardById
};
