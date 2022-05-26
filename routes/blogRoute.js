const express = require("express");
const { getAllBlog } = require("../controller/BlogController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Hello from technologies route");
  next();
});

router.route("/").get(getAllBlog);

module.exports = router;
