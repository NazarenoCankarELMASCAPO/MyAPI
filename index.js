const express = require("express");
const app = express();
const port = 3000;

// Conexion a base de datos
const mongoose = require("mongoose");
mongoose
  .connect(
    'mongodb+srv://umacankar9:umitabb123@myapi-database.2e8w7qc.mongodb.net/matepreguntas?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("Base de datos conectada"))
  .catch(error => console.error("Error de conexión:", error));

const User = require("./models/user.js");

app.use(express.json()); // Middleware para manejar datos JSON en solicitudes

app.get("/", (req, res) => {
  res.json({
    message: "It really works but"
  });
});

app.get("/users", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.status(500).json({ error: "Error al recuperar usuarios", message: error });
    });
});

// Ruta para crear un nuevo usuario (por implementar)

app.listen(port, () => {
  console.log(`Funcionando en ${port}`);
});

console.log(`http://localhost:${port}`);
