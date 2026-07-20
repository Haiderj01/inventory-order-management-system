const Product = require("../models/productModel");
const Order = require("../models/orderModel");


async function index(req, res) {

    try {

        const orders = await Order.getAllOrders();

        res.render("orders/index", {
            title: "Orders",
            orders,
        });

    } catch (err) {

        console.log(err);

        req.flash("error", "Unable to load orders.");

        res.redirect("/");

    }

}

async function showAddForm(req, res) {
    try {
        const products = await Product.getAllProducts();

        res.render("orders/add", {
            title: "Create Order",
            products,
            errors: [],
        });
    } catch (err) {
        console.log(err);
        req.flash("error", "Unable to load products.");
        res.redirect("/orders");
    }
}


async function store(req, res) {

    try {

        const { product_id, quantity } = req.body;

        // Check if product exists
        const product = await Order.getProductById(product_id);

        if (!product) {

            req.flash("error", "Product not found.");

            return res.redirect("/orders/add");
        }

        // Validate quantity
        if (Number(quantity) <= 0) {

            req.flash("error", "Quantity must be greater than 0.");

            return res.redirect("/orders/add");
        }

        // Check stock
        if (Number(quantity) > product.stock) {

            req.flash(
                "error",
                "Insufficient stock available."
            );

            return res.redirect("/orders/add");
        }

        // Create order + update stock
        await Order.createOrder(product_id, quantity);

        req.flash("success", "Order created successfully.");

        res.redirect("/orders");

    } catch (err) {

        console.log(err);

        req.flash("error", "Unable to create order.");

        res.redirect("/orders/add");

    }

}

module.exports = {
    index,
    showAddForm,
    store,
};