import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

dotenv.config();

const MONGO_DB = process.env.MONGO_DB;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_URL = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_DB}.phqufut.mongodb.net/${MONGO_DB_NAME}`

const connectDB = async () => {
    try{
        const connectNow = await mongoose.connect(MONGO_URL);
        console.log(`connected to mongoDB database ${connectNow.connection.host}`.bgMagenta.white);
    } catch (error){
        console.log(`Error in mongoDB server, ${error}`.bgRed.white)
    }
};

export default connectDB;