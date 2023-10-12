const express = require("express");
const router = express.Router();
const productController = require("../controller/product");

router
  .post("/", productController.createProduct)
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getProduct)
  .delete("/:id", productController.deleteProduct)
  .patch("/:id", productController.updateProduct);

module.exports = router;
