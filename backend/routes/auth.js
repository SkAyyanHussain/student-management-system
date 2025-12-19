const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// default user (for testing)
router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.json("User Registered");
});

router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) return res.status(401).json("Invalid Credentials");

  const token = jwt.sign({ id: user._id }, "secretkey");
  res.json({ token });
});

module.exports = router;
