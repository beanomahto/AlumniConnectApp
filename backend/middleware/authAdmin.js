const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.protectAdmin = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).select("-password");
      if (!user || user.role !== "admin") {
        return res.status(403).json({ message: "Not authorized as admin" });
      }
      req.user = user;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
  } else {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};