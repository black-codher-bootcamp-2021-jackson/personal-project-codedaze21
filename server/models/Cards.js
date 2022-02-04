const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
    cardId: Number,
    question: String,
    answer: String,
    correct: Boolean,
})

mongoose.model("cards", cardSchema);