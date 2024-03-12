//app.js

// importe le module Express et dotenv
const express = require("express");
const dotenv = require("dotenv");

// lien avec le fichier de config .env à la racine du dossier Back-end
dotenv.config();

console.log(process.env.HAZARD);

const port = process.env.PORT || 3000;
// crée une instance 'app' de Express
const app = express();
// crée une instance CORS
const cors = require("cors");

// Ici : autorise toutes les origines de requête (= domaines différents)
app.use(cors());

// Importe les routes de la page home
const mainRouter = require("./routes/home");
// utilise les routes de home.js sur le chemin "/home"
app.use("/", mainRouter);

// Importe les routes de detail
const detailRouter = require("./routes/detail");
// utilise les routes de detail.js sur le chemin "/detail"
app.use("/detail", detailRouter);

// le serveur écoute les connexions entrantes sur le port spécifié dans les var d'env (ou sur 3000)
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
