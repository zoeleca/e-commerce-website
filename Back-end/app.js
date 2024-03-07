//app.js

// importe le module Express
const express = require('express');

// crée une instance 'app' de Express
const app = express();

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
