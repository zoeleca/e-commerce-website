//app.js

// importe le module Express
const express = require("express");

// crée une instance 'app' de Express
const app = express();
const cors = require("cors");

// Ici : autorise toutes les origines de requête.
app.use(cors());

// Importe les routes de la page home
const mainPage = require("./routes/home");
// utilise les routes de home sur le chemin "/home"
app.use("/", mainPage);

// Importe les routes de detail
const detailRoutes = require("./routes/detail");
// utilise les routes de detail sur le chemin "/detail"
app.use("/detail", detailRoutes);

// le serveur écoute les connexions entrantes sur le port spécifié dans les var d'env (ou sur 3000)
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
