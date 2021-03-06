const express = require('express');

const UserRoute = require('./routes/user');
const SetupRoute = require('./routes/setup');
const AuthenticationRoute = require('./routes/authentication');
const BoardRoute = require('./routes/board');
const ColumnRoute = require('./routes/column');
const CardRoute = require('./routes/card');
const ValidationRoute = require('./routes/validation');

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

router.use('/users', UserRoute);
router.use('/setup', SetupRoute);
router.use('/authentication', AuthenticationRoute);
router.use('/boards', BoardRoute);
router.use('/columns', ColumnRoute);
router.use('/cards', CardRoute);
router.use('/validation', ValidationRoute);

module.exports = router;
