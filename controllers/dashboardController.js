const Dashboard = require("../models/dashboardModel");

async function index(req, res) {

    try {

        const totalProducts =
            await Dashboard.getTotalProducts();

        const totalOrders =
            await Dashboard.getTotalOrders();

        const lowStockProducts =
            await Dashboard.getLowStockProducts();

        res.render("dashboard/index", {
            title: "Dashboard",
            totalProducts,
            totalOrders,
            lowStockProducts,
        });

    } catch (err) {

        console.log(err);

        req.flash("error", "Unable to load dashboard.");

        res.redirect("/products");

    }

}

module.exports = {
    index,
};