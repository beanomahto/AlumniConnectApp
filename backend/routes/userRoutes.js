const express = require("express");
const User = require("../models/User"); // <-- ADD THIS LINE
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

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
