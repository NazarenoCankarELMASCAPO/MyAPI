const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    mail: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    name: String,
    profilePic: {
        type: String,
        required: false
    },
    aboutMe: {
        type: String,
        required: false
    }
}, {
    collection: "users"
})

const user = new mongoose.model("UserTeX7", userSchema)

module.exports = user