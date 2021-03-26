const express = require("express");
const router = express.Router();
const commentsCTL = require('../controllers/comments');

router.post("/add/:id", commentsCTL.add);
router.get("/remove/:id", commentsCTL.delete);
router.get("/edit/:id", commentsCTL.edit);
// router.post("/login", commentsCTL.login);
// router.post("/reg", commentsCTL.reg);
// router.get("/logout", commentsCTL.logout);

module.exports = router;