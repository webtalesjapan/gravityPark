const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Sample Api');
});

const bookingApiRouter = require('./booking');

router.use('/booking', bookingApiRouter);

module.exports = router;
