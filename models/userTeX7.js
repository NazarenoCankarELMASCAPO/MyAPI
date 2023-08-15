const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    mail: String,
    password: String,
    name: String

}, {
    collection: "users"
})

const user = new mongoose.model("UserTeX7", userSchema)

module.exports = user