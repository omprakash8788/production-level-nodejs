const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").post(createProduct).get(getAllProducts);

router
  .route("/:id")
  .put(updateProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

// router.get('/', getAllProducts);
// router.post('/', createProduct);

module.exports = router;
