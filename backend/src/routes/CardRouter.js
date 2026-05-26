import express from "express"
import { getAllCards, getCardById, createCard, updateCard, deleteCard } from "../controllers/CardController.js"
import requireAuth from "../middleware/requireAuth.js"
const cardRouter = express.Router()

//require auth for  all cardRouters
cardRouter.use(requireAuth)

cardRouter.get("/", getAllCards)
cardRouter.get("/:id", getCardById)
cardRouter.post("/", createCard)
cardRouter.put("/:id", updateCard)
cardRouter.delete("/:id", deleteCard)

export default cardRouter