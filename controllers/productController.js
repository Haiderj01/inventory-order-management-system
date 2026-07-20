const Product = require("../models/productModel");

async function index(req, res) {
    try {
        const products = await Product.getAllProducts();

        res.render("products/index", {
            title: "Products",
            products,
        });

    } catch (error) {

        console.log(error);

        req.flash("error", "Something went wrong.");

        res.redirect("/");
    }
}

module.exports = {
    index,
};