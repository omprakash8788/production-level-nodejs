const express = require("express")

const app = express();

// Middleware to parse JSON
app.use(express.json());


// Simple route
app.get("/", (req, res)=>{
    res.send("API is running")
});

module.exports= app;

