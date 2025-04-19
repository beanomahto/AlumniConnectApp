// models/Alumni.js
const mongoose = require("mongoose");

const alumniSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  batch: {
    type: Number,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  skills: [String], // Array of skills (e.g., JavaScript, Python, etc.)
  bio: {
    type: String,
    maxlength: 500,
  },
  socialLinks: {
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    personalWebsite: {
      type: String,
    },
  },
  profilePicture: {
    type: String, // URL of the profile picture
    default: "default-profile-pic.png",
  },
  dateUpdated: {
    type: Date,
    default: Date.now,
  },
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
