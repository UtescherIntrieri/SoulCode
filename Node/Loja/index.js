require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const specs = require("./swagger");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

const produtosRoutes = require("./routes/produtos");
app.use(produtosRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs, { explorer: true}));

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});