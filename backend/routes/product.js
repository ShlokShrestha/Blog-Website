const express = require("express");
const router = express.Router();
const productController = require("../controller/product");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
router
  .post("/", upload.single("image"), productController.createProduct)
  .get("/", productController.getAllProduct)
  .get("/:id", productController.getProduct)
  .delete("/:id", productController.deleteProduct)
  .patch("/:id", productController.updateProduct);

module.exports = router;
