import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import cardRoutes from "./routes/CardRouter.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config()
const PORT = process.env.PORT
const app = express()

//connect to db
connectDB()


//middleware
app.use(express.json())
app.use(cors())
app.use(rateLimiter)
//  routes
app.use("/api/cards", cardRoutes)

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT ", PORT)
})