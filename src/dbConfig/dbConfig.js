import mongoose from "mongoose";

const mongo_db_url = process.env. mongo_db_url || "mongodb://127.0.0.1:27017/transactions"

export const connectMongo = () => {
  try {
    const connect = mongoose.connect(mongo_db_url)
    if(connect) {
      console.log("Database conected");
    }
  } catch (error) {
    console.log("Error:", error);
  }
}







