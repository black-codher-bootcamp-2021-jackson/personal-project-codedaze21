const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
    {
    username: { type: String, required: true },
    firstName: String,
    lastName: String,
    emailAddress: { type: String, required: true, unique: true },
    bio: String,
    password: { type: String, required: true }
    }
);

mongoose.model("users", userSchema);