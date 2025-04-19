const express = require("express");
const User = require("../models/User");
const { protectAdmin } = require("../middleware/authAdmin");

const router = express.Router();


// Get all users (admin only)
router.get("/users", protectAdmin, async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude password
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error fetching users" });
  }
});

// Get a single user (admin only)
router.get("/users/:id", protectAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password"); // Exclude password
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ message: "Server error fetching user" });
  }
});

// Update any user (admin only)
router.put("/users/:id", protectAdmin, async (req, res) => {
  const {role } = req.body;
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.role = role || user.role; // Admin can change role

    const updatedUser = await user.save();
    const { password, ...userData } = updatedUser.toObject();
    res.json(userData);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error updating user" });
  }
});

// Delete any user (admin only)
router.delete("/users/:id", protectAdmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: "Server error deleting user" });
  }
});

module.exports = router;