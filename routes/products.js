const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Display all products
router.get("/", productController.index);

// Show Add Product Form
router.get("/add", productController.showAddForm);

// Save Product
router.post("/add", productController.store);

module.exports = router;