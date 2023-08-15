const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    score: Number
}, {
    collection: "ranking"
})

const user = new mongoose.model("User", userSchema)

module.exports = user