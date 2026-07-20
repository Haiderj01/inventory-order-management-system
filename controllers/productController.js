const Product = require("../models/productModel");

// Display Products
async function index(req, res) {

    try {

        const products = await Product.getAllProducts();

        res.render("products/index", {
            title: "Products",
            products,
            keyword: ""
        });

    } catch (err) {

        console.log(err);

        req.flash("error", "Unable to load products.");

        res.redirect("/");
    }

}

// Show Add Product Form
function showAddForm(req, res) {
    res.render("products/add", {
        title: "Add Product",
        errors: [],
        old: {},
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

// Show Edit Form
async function showEditForm(req, res) {

    try {

        const product = await Product.getProductById(req.params.id);

        if (!product) {

            req.flash("error", "Product not found.");

            return res.redirect("/products");
        }

        res.render("products/edit", {
            title: "Edit Product",
            product,
            errors: [],
        });

    } catch (err) {

        console.log(err);

        req.flash("error", "Something went wrong.");

        res.redirect("/products");
    }

}

// Update Product
async function update(req, res) {

    try {

        const { name, sku, price, stock } = req.body;

        await Product.updateProduct(req.params.id, {
            name,
            sku,
            price,
            stock,
        });

        req.flash("success", "Product updated successfully.");

        res.redirect("/products");

    } catch (err) {

        console.log(err);

        req.flash("error", "Unable to update product.");

        res.redirect("/products");
    }

}

// Delete Product
async function destroy(req, res) {

    try {

        await Product.deleteProduct(req.params.id);

        req.flash("success", "Product deleted successfully.");

        res.redirect("/products");

    } catch (err) {

        console.log(err);

        req.flash(
            "error",
            "Cannot delete this product because it has existing orders."
        );

        res.redirect("/products");

    }

}
// Search Products
async function search(req, res) {

    try {

        const keyword = req.query.keyword || "";

        const products = keyword
            ? await Product.searchProducts(keyword)
            : await Product.getAllProducts();

        res.render("products/index", {
            title: "Products",
            products,
            keyword
        });

    } catch (err) {

        console.log(err);

        req.flash("error", "Search failed.");

        res.redirect("/products");
    }

}
module.exports = {
    index,
    search,
    showAddForm,
    store,
    showEditForm,
    update,
    destroy,
};