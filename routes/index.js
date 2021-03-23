const express = require('express');
const router = express.Router();
const indexCtrl = require('../controllers/reviews');


router.get('/', indexCtrl.index);

module.exports = router;