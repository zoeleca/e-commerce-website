//app.js

// importe le module Express et dotenv
const express = require("express");
const dotenv = require("dotenv");

function makeApp(saveProduct) {
  // lien avec le fichier de config .env à la racine du dossier Back-end
  dotenv.config();

  // crée une instance 'app' de Express
  const app = express();

  // crée une instance CORS
  const cors = require("cors");

  // Ici : autorise toutes les origines de requête (= domaines différents)
  app.use(cors());

  // on parse le corps des requetes JSON
  app.use(express.json());

  // Importe les routes de la page home
  const mainRouter = require("./routes/home");

  // utilise les routes de home.js sur le chemin "/home"
  app.use("/", mainRouter);

  // Importe la route newProduct sur le chemin /post
  const makeRouter = require("./routes/newProduct");
  const postRouter = makeRouter(saveProduct);
  app.use("/post", postRouter);

  // Importe la route backoffice pour les users
  const officeRouter = require("./routes/backoffice");
  app.use("/backoffice", officeRouter);
  return app;
}

module.exports = makeApp;
