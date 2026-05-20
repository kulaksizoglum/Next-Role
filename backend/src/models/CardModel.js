import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true,

    },
    status: {
        type: String,
        enum: [
            "Applied",
            "Interview",
            "Rejected",
            "Offer",
        ],
        default: "Applied"
    },
    location: {
        type: String,
        trim: true,
    },

    salary: {
        type: String,
    },

    appliedDate: {
        type: Date,
        default: Date.now,
    },

}, { timestamps: true })

const Card = mongoose.model("Card", cardSchema)
export default Card