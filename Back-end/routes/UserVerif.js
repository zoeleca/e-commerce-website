// UserVerif.js

const express = require("express");
const router = express.Router();
const { getUser } = require("../dbqueries/getUser.js");


router.post("/", async (req, res) => { // Changement de la méthode en POST
  try {
    // Extraction des données de la requête de connexion
    const { name, mail, mdp } = req.body;

    // Récupération des utilisateurs depuis la base de données
    const usersFromDB = await getUser();

    // Comparaison des données de connexion avec celles de la base de données
    const userMatch = usersFromDB.find(user => user.name === name && user.email === mail && user.password === mdp);

    if (userMatch) {
      // Utilisateur trouvé, connexion réussie
      res.status(200).json({ message: "Connexion réussie" });
    } else {
      // Aucun utilisateur correspondant, connexion échouée
      res.status(401).json({ error: "Échec de la connexion" });
    }
  } catch (error) {
    console.error("Erreur lors de la vérification de la connexion", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

module.exports = router;
