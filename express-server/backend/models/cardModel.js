const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "The title field is required."],
        },
        description: {
            type: String,
            required: [true, "The description field is required."],
        },
        category: {
            type: String,
            required: [true, "The category field is required."],
        }
    }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;