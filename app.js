const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const toursRouter = require("./routes/toursRoute");
const techRouter = require("./routes/technologyRoute");
const fitnessRoute = require("./routes/fitnessRoute");
const articleRoute = require("./routes/articleRoute");

const app = express();

app.use(cors());

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/tours", toursRouter);
app.use("/api/v1/technologies", techRouter);
app.use("/api/v1/fitness", fitnessRoute);
app.use("/api/v1/article", articleRoute);

module.exports = app;
