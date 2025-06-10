import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// console.log(`uri : ${process.env.MONGO_URI}`);


const connectDb = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`Mongodb connected!! DB_HOST : ${connectionInstance.connection.host}`);
        
    }
    catch(error){
        console.log("Mongodb connection error ", error);
        process.exit(1)
    }
}

export default connectDb;