const express = require('express');

const UserRoute = require('./routes/user');
const SetupRoute = require('./routes/setup');
const AuthenticationRoute = require('./routes/authentication');

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

router.use('/users', UserRoute);
router.use('/setup', SetupRoute);
router.use('/authentication', AuthenticationRoute);


module.exports = router;
