const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    score: Number
})

const user = new mongoose.model("User", userSchema)

module.exports = user