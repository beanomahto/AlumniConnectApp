// models/Post.js

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  tags: [String], // Tags related to the post (same as user tags)
  createdAt: { type: Date, default: Date.now },

  // Optional: Embedded comments array
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
