const mongoose = require("mongoose");
const { Schema } = mongoose;
const cardSchema = require("./Cards")

const deckSchema  = new Schema ({
    deckName: String,
    cardsInDeck: [cardSchema],
    userId: String,
    // userId: Schema.Types.ObjectId,
});

mongoose.model("decks", deckSchema);