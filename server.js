import express from "express";
import morgan from "morgan";
import colors from "colors";
import dotenv from 'dotenv';
import connectDB from "./config/dbConfig.js";

const app = express();

// .env configure
dotenv.config();
const PORT = 5000;

// config DB 
connectDB();

// middlewares 
app.use(express.json());
app.use(morgan("dev"));

// rest api 
app.get("/", (req, res) => {
    res.send("<h1>My app is running now on the browser</h1>")
});


app.listen(PORT, () => {
    console.log(`server is running on the port ${PORT}`.bgCyan.black)
});

