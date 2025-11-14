const mongoose=require("mongoose");

const productSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
},{
    timestamps:true,
})

const Product = mongoose.model("Product", productSchema);
module.exports=Product;