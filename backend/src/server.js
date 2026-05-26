import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import { connectDB } from "./config/db.js";
import cardRoutes from "./routes/CardRouter.js";
import userRoutes from "./routes/UserRouter.js"
import rateLimiter from "./middleware/rateLimiter.js";
import path from "path"

dotenv.config()
const PORT = process.env.PORT
const app = express()
const __dirname = path.resolve()

//connect to db
connectDB()


//middleware
app.use(express.json())
if (process.env.NODE_ENV !== "production") {
    app.use(cors())
}
app.use(rateLimiter)
app.use((req, res, next) => {
    console.log("REQ:", req.method, "route:", req.url)
    next()
})
//  routes
app.use("/api/cards", cardRoutes)
app.use("/api/user", userRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))
    app.get((req, res) => {
        res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"))
    })
}


app.listen(PORT, () => {
    console.log("SERVER RUNNING ON PORT ", PORT)
})