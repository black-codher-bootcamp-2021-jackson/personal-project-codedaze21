const mongoose = require("mongoose");
const { Schema } = mongoose;

const deckSchema  = new Schema ({
    deckId: Number,
    deckName: String,
    cardsInDeck: [{
        cardId: Number,
        question: String,
        answer: String,
        correct: Boolean}]
});

mongoose.model("decks", deckSchema);