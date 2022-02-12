const mongoose = require("mongoose");
const { Schema } = mongoose;
// const deckSchema = require("./Decks")
const userSchema = new Schema(
    {
    username: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    image: String,
    bio: String,
    password: String,
    // userDecks: [deckSchema]
    }
);

mongoose.model("users", userSchema);
