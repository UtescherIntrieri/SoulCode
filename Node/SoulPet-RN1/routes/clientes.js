const Cliente = require('../database/cliente')
const Endereco = require('../database/endereco')
const { Router } = require("express")


const router = Router()

router.get("/clientes", async (req, res) => {
  const listaClientes = await Cliente.findAll()
  res.json(listaClientes)
})

router.get("/clientes/:id", async (req, res) => {
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

router.post("/clientes", async (req, res) => {
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

router.put("/clientes/:id", async (req, res) => {
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

router.delete("/clientes/:id", async (req, res) => {
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

module.exports = router