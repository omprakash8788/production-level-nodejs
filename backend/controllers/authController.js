const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

// Helper to create signed JWT
const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

// @desc Register a new user
// @route POST /api/v1/auth/register
// @access Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // Check for missing fields
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }
  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists with this email");
  }
  // Create new user
  const user = await User.create({ name, email, password });
  // Create JWT token
  const token = createToken(user._id);
  // Set token in httpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  // Check presence
  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide email and password");
  }
  // Check user exists & get password explicitly
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  // Check password
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }
  // Create token and set cookie
  const token = createToken(user._id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
  res.status(200).json({
    success: true,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    message: "User logged in successfully",
  });
});

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
});

module.exports = { registerUser, loginUser, logoutUser };
