const { model, Schema } = require("mongoose");

const Tarefa = model(
  "tarefa",
  new Schema({
    titulo: {
      type: String,
      required: true,
    },
    descricao: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "pendente",
    },
  })
);
module.exports = Tarefa;
