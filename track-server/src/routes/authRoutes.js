const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;
    await User.create({ email, password });

    const token = jwt.sign({ userId: User._id }, "MY_SECRET_KEY");
    res.status(200).json({ msg: "User created successfully!", token });
  } catch (err) {
    res.status(422).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user with the provided email exists
    const user = await User.findOne({ email });

    // Compare the provided password with the password stored in the database
    if (!user || user.password !== password) {
      // Return a generic error message for both incorrect email and password
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // If the email and password are valid, return success response
    res.json({ message: "Login successful" });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
