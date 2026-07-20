const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const flash = require("connect-flash");
const methodOverride = require("method-override");
require("dotenv").config();
const db = require("./config/database");

const app = express();
const productRoutes = require("./routes/products");

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Files
app.use(express.static(path.join(__dirname, "public")));

// Method Override
app.use(methodOverride("_method"));

// Session
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Flash Messages
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Layouts
app.use(expressLayouts);
app.set("layout", "layouts/layout");

app.get("/", (req, res) => {
    res.redirect("/products");
});
app.use("/products", productRoutes);


db.getConnection()
  .then((connection) => {
    console.log("Connected to MySQL Database");
    connection.release();
  })
  .catch((err) => {
    console.error("Database Connection Failed");
    console.error(err);
  });

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});