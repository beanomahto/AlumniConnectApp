// models/Post.js
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000, // Limit post content
  },
  tags: [String], // Tags to categorize posts (e.g., Networking, Job Openings, etc.)
  datePosted: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      datePosted: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Track users who liked the post
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
