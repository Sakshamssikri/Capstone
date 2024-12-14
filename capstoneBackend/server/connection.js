import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure .env is loaded

const databaseConnection = () => {
    mongoose
        .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/Sensor", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("MongoDB connected successfully");
        })
        .catch((error) => {
            console.error("MongoDB connection failed:", error);
        });
};

export default databaseConnection;