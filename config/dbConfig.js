import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
    try{
        const connectNow = await mongoose.connect(MONGO_URL);
        console.log(`connected to mongoDB database ${connectNow.connection.host}`.bgMagenta.white);
    } catch (error){
        console.log(`Error in mongoDB server, ${error}`.bgRed.white)
    }
};

export default connectDB;