import Card from "../models/CardModel.js"

export const getAllCards = async (req, res) => {

    try {
        const cards = await Card.find().sort({ createdAt: -1 });
        res.status(200).json({ message: "getAllCards", cards })
    } catch (error) {
        res.status(500).json({ message: "Error getting all cards" })
    }
}

export const getCardById = async (req, res) => {
    try {
        const card = await Card.findById(req.params.id)
        if (!card) {
            return res.status(404).json({ message: "Card not found" });
        }
        res.status(200).json({ card })

    } catch (error) {
        res.status(500).json({ message: "Error getting card by id" })
    }

}

export const createCard = async (req, res) => {
    const { title, company, location, salary } = req.body
    if (!title || !company) {
        return res.status(400).json({
            message: "Title and company are required",
        });
    }

    try {
        const card = new Card({ title, company, location, salary })
        await card.save()
        res.status(201).json({ message: "createCard", card })
    } catch (error) {
        res.status(500).json({ message: "Error creating card" })
        console.log(error.message)
    }

}
export const updateCard = async (req, res) => {

    try {
        const card = await Card.findByIdAndUpdate(req.params.id, req.body,
            {
                new: true,
                runValidators: true
            })
        if (!card) {
            return res.status(404).json({ message: "Card not found" });
        }
        res.status(200).json({ message: "updateCard", card })
    } catch (error) {
        res.status(500).json({ message: "Error updating card" })
    }

}

export const deleteCard = async (req, res) => {

    try {
        const card = await Card.findByIdAndDelete(req.params.id)
        if (!card) {
            return res.status(404).json({ message: "Card not found" });
        }
        res.status(200).json({ message: "deleteCard", card })
    } catch (error) {
        res.status(500).json({ message: "Error deleting card" })
    }

}