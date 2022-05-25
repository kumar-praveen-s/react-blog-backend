const express = require("express");
const { getAllTours } = require("../controller/toursController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Hello from tours route");
  next();
});

router.route("/").get(getAllTours);

module.exports = router;
