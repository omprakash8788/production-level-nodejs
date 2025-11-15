const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const protectRoute = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401);
    throw new Error("Not authorized. No token found.");
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id).select("-password");
  next();
});
module.exports = protectRoute;
