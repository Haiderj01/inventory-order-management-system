const db = require("../config/database");

// Get all orders with product name
async function getAllOrders() {

    const [rows] = await db.query(`
        SELECT
            orders.id,
            products.name AS product_name,
            orders.quantity,
            orders.order_date
        FROM orders
        JOIN products
            ON orders.product_id = products.id
        ORDER BY orders.order_date DESC
    `);

    return rows;
}

// Get product by ID
async function getProductById(id) {

    const [rows] = await db.query(
        "SELECT * FROM products WHERE id = ?",
        [id]
    );

    return rows[0];
}

// Create Order and Update Stock
async function createOrder(productId, quantity) {

    const connection = await db.getConnection();

    try {

        await connection.beginTransaction();

        await connection.query(
            `INSERT INTO orders (product_id, quantity)
             VALUES (?, ?)`,
            [productId, quantity]
        );

        await connection.query(
            `UPDATE products
             SET stock = stock - ?
             WHERE id = ?`,
            [quantity, productId]
        );

        await connection.commit();

    } catch (err) {

        await connection.rollback();
        throw err;

    } finally {

        connection.release();

    }
}

module.exports = {
    getAllOrders,
    getProductById,
    createOrder,
};