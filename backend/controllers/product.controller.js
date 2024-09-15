import mongoose from "mongoose";
import Product from "../models/product.model.js";

const createProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res.status(400).json({ success: false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);
  //   res.send("Server is ready");
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.log("error" + error.message);
    res.status(500).json({ success: false, message: "server error" });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(201).json({ success: true, message: `product with ${id} is deleted` });
  } catch (error) {
    console.log("error" + error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Prduct not found" });
  }
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json({ success: true, data: product, message: "Product was updated" });
  } catch (error) {
    console.log(`error : ${error.message}`);
    res.status(500).json({ success: false, messgae: "server error" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log(`error ${error.message}`);
    res.status(404).json({ success: false, message: "No products found" });
  }
};

export { createProduct, deleteProduct, updateProduct, getProducts };
