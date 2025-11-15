const jwt = require("jsonwebtoken");
const isLoggedIn = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return next();
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");
  } catch (error) {
    req.user = null;
  }
  next();
});
module.exports = isLoggedIn;
