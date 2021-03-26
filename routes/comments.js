const express = require("express");
const router = express.Router();
const commentsCTL = require('../controllers/comments');

router.post("/add/:id", commentsCTL.add);
router.get("/remove/:id", commentsCTL.delete);
router.post("/edit/:id", commentsCTL.edit);

module.exports = router;