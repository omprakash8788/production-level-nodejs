const express = require("express");

const app = express();

const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorHandler");
// Middleware to parse JSON
app.use(express.json());

// app.use('/api/products', productRoutes)
// Routes


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
