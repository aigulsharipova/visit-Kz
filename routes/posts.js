const express = require("express");
const router = express.Router();
const postCTL = require('../controllers/posts');

router.get("/", postCTL.index);
router.get("/add", postCTL.add);
router.post("/add", postCTL.createPost);
router.get("/:id", postCTL.showOne);
router.get("/delete/:id", postCTL.delete);

module.exports = router;