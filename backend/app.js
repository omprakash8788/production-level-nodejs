const express = require("express")

const app = express();

const productRoutes = require("./routes/productRoutes")

// Middleware to parse JSON
app.use(express.json());

app.use('/api/products', productRoutes)

// Simple route
app.get("/", (req, res)=>{
    res.send("API is running")
});

module.exports= app;

