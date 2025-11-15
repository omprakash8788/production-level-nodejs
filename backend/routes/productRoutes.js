const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

const protectRoute = require("../middleware/protectRoute");
const restrictTo = require("../middleware/restrictTo");
router.route("/").post(createProduct).get(getAllProducts);

router
  .route("/:id")
  .put(updateProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

// router.get('/', getAllProducts);
// router.post('/', createProduct);

// Protected Routes (Only logged-in users can access)
router.post("/", protectRoute, createProduct);
router.put("/:id", protectRoute, updateProduct);
router.patch("/:id", protectRoute, updateProduct);

// Admin-only Route
router.delete("/:id", protectRoute, restrictTo("admin"), deleteProduct);

module.exports = router;
