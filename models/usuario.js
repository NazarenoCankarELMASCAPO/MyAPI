const mongoose = require("mongoose")
const Schema  = mongoose.Schema

const usuarioSchema = new Schema({
    name: String,
    score: Number
})

const Usuario = mongoose.model("Usuario", usuarioSchema)

module.export = Usuario