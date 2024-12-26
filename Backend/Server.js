const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());

// Middleware
app.use(cors());
  // Middleware to parse JSON data
app.use(bodyParser.json());

// Connect to MongoDB (replace the URL with your MongoDB URI)
mongoose.connect("mongodb://localhost:27017/Truelencer", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error('Failed to connect to MongoDB', err));



// Define User Schema and Model
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
});

const User = mongoose.model("User", userSchema);

// Route to handle user signup
app.post("/api/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Encrypt the password

    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: "User Registered / Signup successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error. Please Try Again Later" });
  }
});

// Function to create a JWT token
const createSecretToken = (userId) => {
  const token = jwt.sign({ userId }, "your-secret-key", { expiresIn: "1h" });
  return token;
};

// Route to handle user login
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.status(400).json({ message: "Incorrect email or password" });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Make sure this is set to true in production
    });

    res.json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/home", (req, res) => {
  res.send("Welcome to the home page!");
});


// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});