const Product = require("../models/Product");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

//@desc Update product (PUT or PATCH)
//@route PUT /api/products/:id
// @route PATCH /api/products/:id
//@ access Public
const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid product ID");
  }
  const product = await Product.findById(id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  const updated = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    success: true,
    data: updated,
    message: "Product updated successfully",
  });
});

// @desc Delete product
// @route DELETE /api/products/:id
// @access Public
const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid product ID");
  }
  const product = await Product.findById(id);
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  await Product.findByIdAndDelete(id);
  res.status(204).json();
});

//@desc Get all products
//route GET /api/products
//@access Public

// const getAllProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json({
//       success: true,
//       data: products,
//       message: "Products fetched successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

const getAllProducts = asyncHandler(async (req, res) => {
//   const search = req.query.search || "";
//   const page = Number(req.query.page) || 1;
//   const limit = Number(req.query.limit) || 5;
//   const sortBy = req.query.sort || "createdAt";

//   const filter = {
//     name: { $regex: search, $options: "i" },
//   };

//   const totalItems = await Product.countDocuments(filter);
//   const totalPages = Math.ceil(totalItems / limit);
//   const skip = (page - 1) * limit;

 //Advance filter and pagination concept 
  const category = req.query.category || null;
  const min = req.query.min ? Number(req.query.min) : null;
  const max = req.query.max ? Number(req.query.max) : null;
  const tags = req.query.tags ? req.query.tags.split(",") : null;
  const queryObject = {};
  if (category) {
    queryObject.category = category;
  }

  if (min !== null || max !== null) {
    queryObject.price = {};
    if (min !== null) queryObject.price.$gte = min;
    if (max !== null) queryObject.price.$lte = max;
    if (min !== null && max !== null && min > max) {
      return res.status(400).json({
        success: false,
        message: "Minimum price cannot be greater than maximum price",
      });
    }
  }

  if (tags && tags.length > 0) {
    queryObject.tags = { $in: tags };
  }

  const products = await Product.find(queryObject);
  // .sort(sortBy.split(",").join(""))
  // .skip(skip)
  // .limit(limit);

  res.status(200).json({
    success: true,
    results: products.length,
    data: products,
    // meta: {
    //   totalItems,
    //   totalPages,
    //   currentPage: page,
    // },
    message: "Fetched all products successfully",
  });
});

//@desc Create a new product
//@route POST /api/products
//@access Public
// Try and catch
// const createProduct = async (req, res) => {
//   try {
//     const { name, price, category, tags } = req.body;
//     if (!name || !price || !category || !tags) {
//       return res.status(400).json({
//         success: false,
//         message: "Name and price are required",
//       });
//     }
//     const newProduct = await Product.create({ name, price, category, tags });
//     res.status(201).json({
//       success: true,
//       data: newProduct,
//       message: "Product created successfully",
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server Error" });
//   }
// };

const createProduct = asyncHandler(async (req, res) => {
  const { name, price, category, tags } = req.body;
  if (!name || !price || !category) {
    res.status(400);
    throw new Error("Name, price, and category are required.");
  }
  const product = await Product.create({ name, price, category, tags });
  res.status(201).json({
    success: true,
    data: product,
    message: "Product created successfully",
  });
});

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
