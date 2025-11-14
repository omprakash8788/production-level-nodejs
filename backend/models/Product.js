const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: [0, "price must be a positive number"],
    },
    category: {
      type: String,
      enum: ["electronics", "clothings", "home", "books"],
      required: [true, "Category is required"],
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
  }
);

productSchema.virtual("priceWithTax").get(function(){
    return(this.price * 1.2).toFixed(2)
});

productSchema.methods.getDiscountedPrice=function(percent){
    return this.price * (1-percent);
}

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
