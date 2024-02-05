import express from "express";
import cors from "cors"
const PORT = process.env.PORT || 8000;

const app = express();

// Middleware

app.use(express.json());
app.use(cors());


// database

connectMongo();
import userRouter from "./src/router/userRouter.js";
import { connectMongo } from "./src/dbConfig/dbConfig.js";
import transactionRouter from "./src/router/transactionRouter.js";
// router
app.use("/api/user", userRouter)
app.use("/api/transaction", transactionRouter)


// start server
app.listen(PORT, (error)=>{
    error ? console.log(error) : console.log("Server is Running");
})


