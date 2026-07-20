const db = require("../config/database");

// Get All Products
async function getAllProducts() {
    const [rows] = await db.query(
        "SELECT * FROM products ORDER BY id DESC"
    );

    return rows;
}

// Find Product by SKU
async function getProductBySKU(sku) {
    const [rows] = await db.query(
        "SELECT * FROM products WHERE sku = ?",
        [sku]
    );

    return rows[0];
}

// Add Product
async function createProduct(product) {

    const sql = `
        INSERT INTO products
        (name, sku, price, stock)
        VALUES (?, ?, ?, ?)
    `;

    const values = [
        product.name,
        product.sku,
        product.price,
        product.stock,
    ];

    const [result] = await db.query(sql, values);

    return result;
}

module.exports = {
    getAllProducts,
    getProductBySKU,
    createProduct,
};