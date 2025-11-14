const app=require("./app");
const dotenv = require("dotenv")
const connectDB=require("./config/db")
dotenv.config();

const PORT = process.env.PORT || 5000;

const MONGO_URI = process.env.MONGO_URI;

// Connect to mongoDB

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server running at http://localhost ${PORT}`)
    })
})