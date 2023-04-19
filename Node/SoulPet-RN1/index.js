require("dotenv").config()

const express = require("express");
const app = express()
app.use(express.json())

const { connection, authenticate } = require("./database/database")
authenticate(connection)
const Cliente = require("./database/cliente")
const Endereco = require("./database/endereco")
const Pet = require("./database/pet")

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

app.put("/clientes/:id", async (req, res) => {
  const { nome, email, telefone, endereco } = req.body
  const { id } = req.params
  try {
    const cliente = await Cliente.findOne({ where: { id } })
    if (cliente) {
      if (endereco) {
        await Endereco.update(endereco, { where: { clienteId: id } });
      }
      await Cliente.update({ nome, email, telefone }, { where: { id } });
    } else {
      res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (err) {
    res.status(500).json({ message: "Um erro aconteceu." });
  }
})

app.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  const cliente = await Cliente.findOne({ where: { id } });
  try {
    if (cliente) {
      cliente.destroy();
      res.status(200).json("Cliente removido.")
    } else {
      res.status(404).json({ message: "Cliente não encontrado" })
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Um erro aconteceu!" });
  }
});

app.get("/pets", async (req, res) => {
  const listaPets = await Pet.findAll()
  res.json(listaPets)
})

app.post("/pets", async (req, res) => {
  const { nome, tipo, dataNasc, porte, clienteId } = req.body
  try {
    const cliente = await Cliente.findOne({ where: { id: clienteId } })
    if (cliente) {
    const petNovo = await Pet.create({ nome, tipo, dataNasc, porte, clienteId })
    res.status(201).json(petNovo)
    } else {
      res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Um erro aconteceu." })
  }
})

app.put("/pets/:id", async (req, res) => {
  const { nome, tipo, dataNasc, porte } = req.body;
  const pet = await Pet.findByPk(req.params.id);
  try {
    if (pet) {
      await Pet.update(
        { nome, tipo, dataNasc, porte },
        { where: { id: req.params.id } }
      );
      res.json({ message: "O pet foi editado." });
    } else {
      res.status(404).json({ message: "O pet não foi encontrado." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

app.listen(3000, () => {
  connection.sync({ force: true })
  console.log("Servidor rodando em http://localhost:3000/");
})