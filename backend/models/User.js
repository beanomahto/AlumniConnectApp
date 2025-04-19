const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["alumni", "admin"], default: "alumni" },

    // Profile fields
    batch: { type: Number },
    branch: { type: String },
    jobTitle: { type: String },
    company: { type: String },
    location: { type: String },
    bio: { type: String },
    profilePicture: { type: String },
    socialLinks: {
      linkedin: { type: String },
      github: { type: String },
      twitter: { type: String },
    },

    // Tags as simple array of strings (users can add or remove tags)
    tags: [String], // Tags array for filtering and searching
  },
  { timestamps: true }
);


// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password method
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
