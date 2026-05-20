import express from "express"
import { getAllCards, getCardById, createCard, updateCard, deleteCard } from "../controllers/CardController.js"
const cardRouter = express.Router()

cardRouter.get("/", getAllCards)
cardRouter.get("/:id", getCardById)
cardRouter.post("/", createCard)
cardRouter.put("/:id", updateCard)
cardRouter.delete("/:id", deleteCard)

export default cardRouter