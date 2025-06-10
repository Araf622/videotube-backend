import connectDb from "./db/db.js";
import dotenv from "dotenv"
import './env.js'
import app from "./app.js";

const uri = process.env.MONGO_URI
// console.log(uri)
connectDb() 
.then(() => {
    app.listen((process.env.PORT || 8000), ()=> {
        console.log("Server running on port ", process.env.PORT || 8000)
        
    })
})
.catch((err) => {
    console.log(`MongoDB connection error `,err);
    
})