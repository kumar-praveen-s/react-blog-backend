const Blog = require("../models/blogDataSchema");

exports.getAllTours = async (req, res) => {
  try {
    console.log("Hello from tours controller");
    const tours = await Blog.find({ category: "Tourism" });
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
