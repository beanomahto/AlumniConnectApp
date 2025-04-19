const express = require("express");
const User = require("../models/User"); // <-- ADD THIS LINE
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

<<<<<<< HEAD
const {
  searchUsers,
  getUserProfile,
} = require("../controllers/userController");
=======
//CREATE USER
router.post("/register", async (req, res) => {
  const { name, email, password, role, batch, branch, jobTitle, company, location, bio, profilePicture, socialLinks, tags } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    const user = new User({
      name,
      email,
      password, // Make sure your User model hashes this in a pre-save hook!
      role,
      batch,
      branch,
      jobTitle,
      company,
      location,
      bio,
      profilePicture,
      socialLinks,
      tags
    });

    const createdUser = await user.save();
    // Exclude password from response
    const { password: _, ...userData } = createdUser.toObject();
    res.status(201).json(userData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//GET ALL USERS
router.get("/directory", protect, async (req, res) => {
  try {
    // const users = await User.find().select("-password"); // Exclude password
    const users = await User.find().select(); // Include passwords
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error fetching users" });
  }
});

//GET ONE USER
router.get("/profile", protect, async (req, res) => {
  try {
    // req.user is populated by the 'protect' middleware
    const user = await User.findById(req.user.id).select("-password"); // Exclude password
>>>>>>> ad9751b735616ccfb7fe204ac61b99b46dce53cb

// userRoutes.js
router.get("/search", searchUsers);
router.get("/profile", protect, getUserProfile);
// Add more here later...

//UPDATE USER
router.put("/profile", protect, async (req, res) => {
  const { name, email, batch, branch, jobTitle, company, location, bio, profilePicture, socialLinks, tags } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name || user.name;
    user.email = email || user.email;
    user.batch = batch || user.batch;
    user.branch = branch || user.branch;
    user.jobTitle = jobTitle || user.jobTitle;
    user.company = company || user.company;
    user.location = location || user.location;
    user.bio = bio || user.bio;
    user.profilePicture = profilePicture || user.profilePicture;
    user.socialLinks = socialLinks || user.socialLinks;
    user.tags = tags || user.tags;

    const updatedUser = await user.save();
    const { password, ...userData } = updatedUser.toObject();
    res.json(userData);
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Server error updating profile" });
  }
});

module.exports = router;
