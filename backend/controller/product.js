const mongoose = require("mongoose");
const model = require("../model/product");
const Product = model.Product;

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const doc = await product.save();
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating Product" });
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const doc = await Product.find();
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating Product" });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findById(id).exec();
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating Product" });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
    }).exec();
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating Product" });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const doc = await Product.findByIdAndDelete(id).exec();
    res.status(201).json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error creating Product" });
  }
};
