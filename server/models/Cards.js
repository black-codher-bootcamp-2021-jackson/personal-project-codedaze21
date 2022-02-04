const mongoose = require("mongoose");
const { Schema } = mongoose;

const cardSchema = new Schema({
    question: String,
    answer: String,
})

mongoose.model("cards", cardSchema);

module.exports=cardSchema