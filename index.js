const express = require("express")
const app = express()
const port = 4000

// Conexion a base de datos

const moongose = require("mongoose")
mongoose.connect('mongodb+srv://umacankar9:umitabb123@myapi-database.2e8w7qc.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log("Base de datos conectada"))
.catch(e => console.log(e))

// 

app.get("/", (req, res) => {
    res.send("WORKS")
})

app.listen(port, () => {
    console.log(`Funcionando en ${port}`)
})