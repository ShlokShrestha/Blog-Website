const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String, required: true },

  image: { type: String, required: true },
  //thumbnail: { type: String, required: true },
});
exports.Product = mongoose.model("Product", productSchema);
