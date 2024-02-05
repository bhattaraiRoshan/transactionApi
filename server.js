import express from "express";
import cors from "cors"
import { connectMongo } from "./src/dbConfig/dbConfig.js";
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware


const corsOptions = {
    credentials: true,
    origin:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    
}
app.use(cors(corsOptions));
app.use(express.json());


// database

connectMongo();
import userRouter from "./src/router/userRouter.js";

import transactionRouter from "./src/router/transactionRouter.js";
// router
app.use("/api/user", userRouter)
app.use("/api/transaction", transactionRouter)


// start server
app.listen(PORT, (error)=>{
    error ? console.log(error) : console.log("Server is Running");
})


