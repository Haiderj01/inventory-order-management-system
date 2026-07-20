const Product = require("../models/productModel");

// Display Products
async function index(req, res) {
    try {
        const products = await Product.getAllProducts();

        res.render("products/index", {
            title: "Products",
            products,
        });

    } catch (err) {
        console.log(err);
        req.flash("error", "Something went wrong.");
        res.redirect("/");
    }
}

// Show Add Product Form
function showAddForm(req, res) {

    res.render("products/add", {
        title: "Add Product",
    });

}

// Save Product
async function store(req, res) {

    try {

        const { name, sku, price, stock } = req.body;

        await Product.createProduct({
            name,
            sku,
            price,
            stock,
        });

        req.flash("success", "Product added successfully.");

        res.redirect("/products");

    } catch (err) {

        console.log(err);

        req.flash("error", "Unable to add product.");

        res.redirect("/products/add");

    }

}

module.exports = {
    index,
    showAddForm,
    store,
};