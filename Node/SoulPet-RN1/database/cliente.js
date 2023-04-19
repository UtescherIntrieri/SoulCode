const { DataTypes } = require("sequelize")
const { connection } = require("./database")

const Cliente = connection.define("cliente", {
  nome: {
    type: DataTypes.STRING(130),
    allowNull: false,
  }, 
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

const Endereco = require("./endereco")
Cliente.hasOne(Endereco,  {onDelete: "CASCADE"})
Endereco.belongsTo(Cliente)

module.exports = Cliente