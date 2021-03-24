const express = require("express");
const router = express.Router();
const usersCTL = require('../controllers/users');

router.get("/", usersCTL.index);
router.post("/user_reg", usersCTL.reg)

module.exports = router;