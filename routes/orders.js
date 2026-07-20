const express = require("express");
const router = express.Router();

const orderController = require("../controllers/orderController");

// Display Orders
router.get("/", orderController.index);

// Show Add Order Form
router.get("/add", orderController.showAddForm);

// Save Order
router.post("/add", orderController.store);

module.exports = router;