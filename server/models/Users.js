const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    firstName: String,
    lastName: String,
    emailAddress: String,
    bio: String,
    password: String,

});

mongoose.model("users", userSchema);