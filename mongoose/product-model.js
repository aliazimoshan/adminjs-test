const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: Array,
      required: true,
    },
    gallery: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    sale_price: {
      type: Number,
      required: false,
    },
    flash_sale: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
