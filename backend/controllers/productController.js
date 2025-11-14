const Product = require("../models/Product");

const getAllProducts = async(req, res)=>{
    const products = await Product.find();
    res.status(200).json({data:products});
};

module.exports={
    getAllProducts
};