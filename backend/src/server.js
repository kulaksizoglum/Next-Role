import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import cardRoutes from "./routes/CardRouter.js";
import userRoutes from "./routes/UserRouter.js"
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
app.use((req, res, next) => {
    console.log("REQ:", req.method, "route:", req.url)
    next()
})
//  routes
app.use("/api/cards", cardRoutes)
app.use("/api/user", userRoutes)

app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT ", PORT)
})