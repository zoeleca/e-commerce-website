// importe le module Express
const express = require("express");
// crée une instance 'app' de Express
const app = express();
const cors = require("cors");

// Ici : autorise toutes les origines de requête
app.use(cors());

// importe la route de la page d'accueil
const mainPage = require("./routes/main");

app.use("/", mainPage);

// le serveur écoute les connexions entrantes sur le port spécifié dans les var d'env (ou sur 3000)
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
