const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const { validateProduct } = require("../middleware/validation");

// Display all products
router.get("/", productController.index);

// Show Add Product Form
router.get("/add", productController.showAddForm);

// Save Product
router.post("/add", validateProduct, productController.store);

module.exports = router;