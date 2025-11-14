const Product = require("../models/Product");

//@desc Get all products
//route GET /api/products
//@access Public

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res
      .status(200)
      .json({
        success: true,
        data: products,
        message: "Products fetched successfully",
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

//@desc Create a new product
//@route POST /api/products
//@access Public
const createProduct=async(req, res)=>{
    try {
        const {name, price}=req.body;
        if(!name || !price){
            return res.status(400).json({
                success:false,
                message:"Name and price are required"
            })
        }
        const newProduct= await Product.create({name, price});
        res.status(201).json({
            success:true,
            data:newProduct,
            message:"Product created successfully"
        })
        
    } catch (error) {
        res.status(500).json({success:false, message:"Server Error"})
        
    }
}


module.exports = {
  getAllProducts,
  createProduct
};
