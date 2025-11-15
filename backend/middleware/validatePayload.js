const validateProduct = (req, res, next) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({
      success: false,
      message: "Name, price, and category are required fields.",
    });
  }
  if (typeof price !== "number" || price <= 0) {
    return res.status(400).json({
      success: false,
      message: "Price must be a positive number.",
    });
  }
  next();
};
module.exports = validateProduct;
