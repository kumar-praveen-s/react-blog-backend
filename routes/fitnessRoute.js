const express = require("express");
const { getAllFitnessData } = require("../controller/fitnessController");

const router = express.Router();

router.use((req, res, next) => {
  console.log("Hello from fitness route");
  next();
});

router.route("/").get(getAllFitnessData);

module.exports = router;
