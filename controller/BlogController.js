const Blog = require("../models/blogDataSchema");

exports.getAllBlog = async (req, res) => {
  try {
    console.log("Hello from fitness controller");
    const data = await Blog.find();
    res.status(200).json({
      status: "success",
      requestedAt: req.requestTime,
      data: data,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
