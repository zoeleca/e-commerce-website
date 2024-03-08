//app.js

// importe le module Express
<<<<<<< HEAD
const express = require("express");
=======
const express = require('express');

>>>>>>> 5867c9ad06dbba4567f3b587056c84e9d9dad936
// crée une instance 'app' de Express
const app = express();
const cors = require("cors");

<<<<<<< HEAD
// Ici : autorise toutes les origines de requête
app.use(cors());

// importe la route de la page d'accueil
const mainPage = require("./routes/main");

app.use("/", mainPage);

// le serveur écoute les connexions entrantes sur le port spécifié dans les var d'env (ou sur 3000)
app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
=======
// Middleware pour parser le JSON dans le corps des requêtes
app.use(express.json());

// Importe les routes de detail
const detailRoutes = require('./routes/detail');
// utilise les routes de detail sur le chemin "/detail"
app.use('/detail', detailRoutes);

// importe la route de la page d'accueil
const mainPage = require('./routes/main');
app.use('/main', mainPage);

// exemple de fonction middleware renvoyant un json
app.use((req, res) => {
res.json({ message: "Votre requête a bien été reçue !" });
});

// on exporte l'application Express (encapsulée)
module.exports = app;
>>>>>>> 5867c9ad06dbba4567f3b587056c84e9d9dad936
