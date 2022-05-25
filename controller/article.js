const Blog = require("../models/blogDataSchema");

exports.getArticle = async (req, res) => {
  try {
    const article = await Blog.find({ id: req.params.id });

    res.status(200).json({
      status: "success",
      data: article,
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
