const express = require("express");
const User = require("../models/User"); // <-- ADD THIS LINE
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

const {
  searchUsers,
  getUserProfile,
} = require("../controllers/userController");

// userRoutes.js
router.get("/search", searchUsers);
router.get("/profile", protect, getUserProfile);
// Add more here later...

module.exports = router;
