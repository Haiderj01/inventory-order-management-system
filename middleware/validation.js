const Product = require("../models/productModel");


async function validateProduct(req, res, next) {
    const { name, sku, price, stock } = req.body;

    const errors = [];

    // Name validation
    if (!name || name.trim() === "") {
        errors.push("Product name is required.");
    }

    // SKU validation
    if (!sku || sku.trim() === "") {
        errors.push("SKU is required.");
    }

    // Price validation
    if (!price || Number(price) <= 0) {
        errors.push("Price must be greater than 0.");
    }

    // Stock validation
    if (stock === "" || Number(stock) < 0) {
        errors.push("Stock cannot be negative.");
    }

    if (errors.length > 0) {
        const existingProduct = await Product.getProductBySKU(sku);

        if (existingProduct) {
            errors.push("SKU already exists.");
        }
        return res.render("products/add", {
            title: "Add Product",
            errors,
            old: req.body,
        });
    }

    next();
}

module.exports = {
    validateProduct,
};