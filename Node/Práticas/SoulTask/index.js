require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

const tarefasRoutes = require("./routes/tarefas");
app.use(tarefasRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});
