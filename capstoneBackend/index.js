import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./server/connection.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dotenv.config(); // Ensure .env is loaded

// Connect to the database
databaseConnection();

const app = express();
const port = process.env.PORT || 4000;

// CORS Configuration
const corsOptions = {
    origin: "http://localhost:3000", // Replace with your frontend's origin
    credentials: true, // Allow cookies
};
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Debugging Middleware to log incoming requests
app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

// Test Route
app.get("/test", (req, res) => {
    res.status(200).send("Test endpoint is working!");
});

// API Routes
app.use("/api/v1/user", userRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});