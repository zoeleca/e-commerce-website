// importe le module Express
const express = require('express');

// crée une instance 'app' de Express
const app = express();

// exemple de fonction middleware renvoyant un json
app.use((req, res) => {
   res.json({ message: 'Votre requête a bien bien été reçue !' }); 
});

// on exporte l'application Express (encapsulée)
module.exports = app;