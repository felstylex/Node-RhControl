import express from "express";
import routes from "./server.js";
import db from "./database/config/db.js";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

db.sync();
console.log(`Banco de dados conectado: ${process.env.DB_NAME}`);

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
})