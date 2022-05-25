const express = require("express");
const { getArticle } = require("../controller/article");
const { getAllTours } = require("../controller/toursController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Hello from article route");
  next();
});

router.route("/:id").get(getArticle);

module.exports = router;
