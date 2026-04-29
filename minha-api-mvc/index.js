require("dotenv").config();
const app = require("./src/app");
const db = require("./models");

const PORTA = process.env.PORT || 3000;

db.sequelize
  .authenticate()
  .then(() => {
    console.log("Conexao com o banco estabelecida.");
    return db.sequelize.sync({ alter: process.env.NODE_ENV === "development" });
  })
  .then(() => {
    app.listen(PORTA, () => {
      console.log("Servidor rodando em http://localhost:" + PORTA);
    });
  })
  .catch((err) => {
    console.error("Falha ao iniciar:", err);
    process.exit(1);
  });
