const express = require("express");
const router = express.Router();
const postCTL = require('../controllers/posts');

router.get("/", postCTL.index);
router.get("/add", postCTL.add);
router.post("/add", postCTL.createPost);
router.get("/:id", postCTL.showOne);
router.get("/delete/:id", postCTL.delete);
router.get("/edit/:id", postCTL.edit);
router.post("/edit/:id", postCTL.save);

module.exports = router;