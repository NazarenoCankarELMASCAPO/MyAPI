const express = require("express")
const app = express()

const port = 4000

app.get("/", (req, res) => {
    res.send("WORKS")
})

app.listen(port, () => {
    console.log(`Funcionando en ${port}`)
})