const express = require("express");
const { getAllTech } = require("../controller/techController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Hello from technologies route");
  next();
});

router.route("/").get(getAllTech);

module.exports = router;
