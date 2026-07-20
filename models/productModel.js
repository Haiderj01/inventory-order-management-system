const db = require("../config/database");

// Get All Products
async function getAllProducts() {
    const [rows] = await db.query(
        "SELECT * FROM products ORDER BY id DESC"
    );

    return rows;
}

// Search Products
async function searchProducts(keyword) {

    const search = `%${keyword}%`;

    const [rows] = await db.query(
        `
        SELECT *
        FROM products
        WHERE name LIKE ?
           OR sku LIKE ?
        ORDER BY id DESC
        `,
        [search, search]
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

// Get Product By ID
async function getProductById(id) {
    const [rows] = await db.query(
        "SELECT * FROM products WHERE id = ?",
        [id]
    );

    return rows[0];
}

// Update Product
async function updateProduct(id, product) {

    const sql = `
        UPDATE products
        SET
            name = ?,
            sku = ?,
            price = ?,
            stock = ?
        WHERE id = ?
    `;

    const values = [
        product.name,
        product.sku,
        product.price,
        product.stock,
        id,
    ];

    const [result] = await db.query(sql, values);

    return result;
}

// Delete Product
async function deleteProduct(id) {

    const [result] = await db.query(
        "DELETE FROM products WHERE id = ?",
        [id]
    );

    return result;
}

module.exports = {
    getAllProducts,
    searchProducts,
    getProductBySKU,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};