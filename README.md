# Inventory & Order Management System

A web-based Inventory & Order Management System developed using **Node.js, Express.js, MySQL, and EJS** following the **MVC Architecture**. The application allows users to manage products, create orders, monitor inventory levels, and track order history through a simple and responsive interface.

---

## Features

- Dashboard with inventory statistics
- Product Management (Create, Read, Update, Delete)
- Search Products by Name or SKU
- Order Management
- Automatic Stock Deduction
- Stock Availability Validation
- Low Stock Monitoring
- Flash Messages for Success and Error
- Responsive Bootstrap Interface
- MySQL Transaction Support
- MVC Architecture

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MySQL

### Other Packages
- express-session
- connect-flash
- express-ejs-layouts
- method-override
- dotenv
- mysql2

---

## Project Structure

```
Inventory-Management-System/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── public/
│   ├── css/
│   └── js/
├── routes/
├── sql/
├── views/
├── app.js
├── package.json
├── README.md
└── .env
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/Haiderj01/inventory-order-management-system.git
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file.

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=inventory_db
PORT=3000
SESSION_SECRET=your_secret_key
```


### Run Application

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Modules

### Dashboard
- Total Products
- Total Orders
- Low Stock Products

### Products
- Add Product
- Edit Product
- Delete Product
- Search Product

### Orders
- Create Order
- Stock Validation
- Automatic Stock Update
- Order History

---

## Future Improvements

- User Authentication
- Role-based Access
- Sales Reports
- Export Orders to PDF
- Inventory Analytics
- REST API Version

---

## Author

**Haider Jhalodwala**

---

## License

This project is developed for learning and internship purposes.