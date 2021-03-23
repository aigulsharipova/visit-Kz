const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/visit');

// GET /comments/new
router.get('/new', commentsCtrl.new);

module.exports = router;