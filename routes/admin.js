const express = require("express");
const router = express.Router();
const adminCTL = require('../controllers/admin');

router.get("/", adminCTL.index);

module.exports = router;