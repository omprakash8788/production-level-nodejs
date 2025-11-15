const express = require("express");
const { getMe, getAllUsers } = require("../controllers/userController");
const protectRoute = require("../middleware/protectRoute");
const restrictTo = require("../middleware/restrictTo");
const router = express.Router();
// Authenticated user can access their own profile
router.get("/me", protectRoute, getMe);
// Admin-only route to list all users
router.get("/", protectRoute, restrictTo("admin"), getAllUsers);
module.exports = router;
