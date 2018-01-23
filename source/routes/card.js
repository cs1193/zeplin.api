const express = require('express');
const CardController = require('../controllers/card');
const isAuthenticated = require('../middleware/authentication');

const router = express.Router();

router.route('/')
  .get(isAuthenticated, CardController.getCards)
  .post(isAuthenticated, CardController.createCard);

router.route('/:id')
  .get(isAuthenticated, CardController.getCardById)
  .put(isAuthenticated, CardController.updateCardById)
  .delete(isAuthenticated, CardController.removeCardById);


module.exports = router;
