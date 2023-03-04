import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/user.js";
const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Database connected");
    } catch (error) {
        throw new Error(error);
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("Database disconnected");
});

// Middlewares
app.use(express.json());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/user", usersRoute);

app.listen(8080, () => {
    connect();
    console.log("Server is listening on port 8080");
    }    
);
