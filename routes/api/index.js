const express = require('express');
const router = express.Router();

const firebase = require('firebase');
const firebaseConfig = require('../../firebaseConfig');
firebase.initializeApp(firebaseConfig);

const bookingApiRouter = require('./booking');
const subscribeApiRouter = require('./subscribe');

router.use('/booking', bookingApiRouter);
router.use('/subscribe', subscribeApiRouter);

module.exports = router;
