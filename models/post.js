const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = new Schema({
    postType: {
        type: String,
        enum: ["photo", "video", "text"]
    },
    text: String,
    author: {
        type: String,
        unique: true,
        required: true
    }
})