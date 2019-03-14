const express = require('express');
// const path = require('path');

const router = express.Router();

// router.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '../public', 'about.hbs'));
// });

//sending the route to view/about.hbs
router.get('/', function(req, res) {
    res.render('about');
});

module.exports = router;

