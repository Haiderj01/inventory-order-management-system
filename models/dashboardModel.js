const db = require("../config/database");

// Total Products
async function getTotalProducts() {

    const [rows] = await db.query(
        "SELECT COUNT(*) AS totalProducts FROM products"
    );

    return rows[0].totalProducts;
}

// Total Orders
async function getTotalOrders() {

    const [rows] = await db.query(
        "SELECT COUNT(*) AS totalOrders FROM orders"
    );

    return rows[0].totalOrders;
}

// Low Stock Products
async function getLowStockProducts() {

    const [rows] = await db.query(
        `
        SELECT *
        FROM products
        WHERE stock < 5
        ORDER BY stock ASC
        `
    );

    return rows;
}

module.exports = {
    getTotalProducts,
    getTotalOrders,
    getLowStockProducts,
};
