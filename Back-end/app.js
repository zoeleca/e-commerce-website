// importe le module Express
const express = require('express');
// importe la route de la page d'accueil
const mainPage = require('./routes/main');

// crée une instance 'app' de Express
const app = express();

// exemple de fonction middleware renvoyant un json
app.use((req, res) => {
   res.json({ message: 'Votre requête a bien bien été reçue !' }); 
});

app.use('/routes', mainPage);

// on exporte l'application Express (encapsulée)
module.exports = app;