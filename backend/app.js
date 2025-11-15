const express = require("express");

const app = express();
 const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");
 const cookieParser = require("cookie-parser");
// Middleware to parse JSON
app.use(express.json());
app.use(cookieParser());

// app.use('/api/products', productRoutes)
// Routes

app.use("/api/v1/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use((req, res, next) => {
  const AppError = require("./utils/appError");
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});


// // Simple route
// app.get("/", (req, res) => {
//   res.send("API is running");
// });

//Global error handler
app.use(errorHandler);
module.exports = app;
