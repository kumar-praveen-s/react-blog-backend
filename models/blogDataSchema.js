const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "A blog data must have article id"],
  },
  title: {
    type: String,
    required: [true, "A blog data must have title"],
  },
  image: {
    type: String,
    required: [true, "A blog data must have image"],
  },
  description: {
    type: String,
    required: [true, "A blog data must have description"],
    trim: true,
  },
  category: {
    type: String,
    required: [true, "A blog data must have category"],
  },
  Date: {
    type: String,
    required: [true, "A blog data must have Date"],
  },
});

const Blog = new mongoose.model("Blog", blogSchema);

module.exports = Blog;
