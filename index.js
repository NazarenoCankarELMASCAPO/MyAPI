const express = require("express");
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

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
const UserTeX7 = require("./models/userTeX7.js");

app.use(express.json()); // Middleware para manejar datos JSON en solicitudes

app.get("/", (req, res) => {
  res.json({
    message: "It really really really really works but"
  });
});


app.get("/users", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(e => {
      res.send(e)
    });
});

app.post("/users", (req, res) => {
    const { name, score } = req.body;
  
    if (!name || !score) {
      return res.status(400).json({ error: "Se requieren name y score para crear un usuario" });
    }
  
    const newUser = new User({
      name,
      score
    });
  
    newUser.save()
    .then(savedUser => {
        res.status(201).json(savedUser);
    })
    .catch(error => {
        res.status(500).json({ error: "Error al guardar el usuario en la base de datos" });
    });
});

// TeX7

app.get("/tex7", (req, res) => {
  UserTeX7.find()
  .then(users => {
    res.json(users)
  })
  .catch(e => {
    res.send(e)
  })
})

app.post("/tex7", (req, res) => {
  const { mail, password, name } = req.body
  if(!mail || !password || !name) {
    return res.status(400).json({ error: "Todos los campos deben estar completos"})
  }
  const newUserTeX7 = new UserTeX7({
    mail,
    password,
    name
  })

  newUserTeX7.save()
  .then(savedUser => {
    res.status(201).json(savedUser)
  })
  .catch(e => {
    res.status(500).json({ error: "Error al guardar usuario en base de datos" })
  }) 
})

app.listen(port, () => {
  console.log(`Funcionando en ${port}`);
  console.log(`http://localhost:${port}`);
});

