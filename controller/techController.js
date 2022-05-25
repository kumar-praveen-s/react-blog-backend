const Blog = require("../models/blogDataSchema");

exports.getAllTech = async (req, res) => {
  try {
    console.log("Hello from tech controller");
    const techData = await Blog.find({ category: "Technology" });
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      data: {
        techData,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
