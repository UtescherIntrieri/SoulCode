require("dotenv").config()

const express = require("express");
const app = express()
app.use(express.json())

const { connection, authenticate } = require("./database/database")
authenticate(connection)
const Cliente = require("./database/cliente")
const Endereco = require("./database/endereco")

app.get("/clientes", async (req, res) => {
  const listaClientes = await Cliente.findAll()
  res.json(listaClientes)
})

app.get("/clientes/:id", async (req, res) => {
  const cliente = await Cliente.findOne({
    where: { id: req.params.id },
    include: [Endereco],
  })
  if (cliente) {
    res.json(cliente)
  } else {
    res.status(404).json({ message: "Usuário não encontrado." })
  }
})

app.post("/clientes", async (req, res) => {
  const { nome, email, telefone, endereco } = req.body
  try {
    const novo = await Cliente.create(
      { nome, email, telefone, endereco },
      { include: [Endereco] }
    )
    res.status(201).json(novo)
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu." })
  }
})

app.listen(3000, () => {
  connection.sync({ force: true })
  console.log("Servidor rodando em http://localhost:3000/");
})