const express = require("express");
const router = express.Router();
const usersCTL = require('../controllers/users');

router.get("/", usersCTL.index);
router.post("/login", usersCTL.login);
router.post("/reg", usersCTL.reg);
router.get("/logout", usersCTL.logout);

module.exports = router;