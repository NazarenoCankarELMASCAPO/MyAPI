const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    score: Number
})

const user = new mongoose.model("ranking", userSchema)

module.exports = user