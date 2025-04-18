const express = require("express");
const User = require("../models/User"); // <-- ADD THIS LINE
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();


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

    if (user) {
      res.json({
        _id: user._id, // Use _id from MongoDB
        name: user.name,
        email: user.email,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error("Error fetching profile:", error);
    res.status(500).json({ message: "Server error fetching profile" });
  }
});

module.exports = router;
