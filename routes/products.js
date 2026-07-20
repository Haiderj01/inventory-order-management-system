const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");
const { validateProduct } = require("../middleware/validation");

// Display all products
router.get("/", productController.index);

// Search Products
router.get("/search", productController.search);

// Show Add Product Form
router.get("/add", productController.showAddForm);

// Save Product
router.post("/add", validateProduct, productController.store);

// Edit Product Form
router.get("/edit/:id", productController.showEditForm);

// Update Product
router.post(
    "/edit/:id",
    validateProduct,
    productController.update
);

router.delete("/:id", productController.destroy);

module.exports = router;