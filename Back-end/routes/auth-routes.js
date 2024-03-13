// page en cours de contruction

const express = require("express");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const executeQuery = require("../modules/dbConfig.js");
const { jwtTokens } = require("../utils/jwt-helper.js");

// import pool from '../db.js';

const router = express.Router();



// Cette route gère le processus de connexion des utilisateurs.
router.post('/login', async (req, res) => {
  try {
    console.log(req.cookies, req.get('origin'));
    const { email, password } = req.body;
    // ... (extraire email et password de la requête)
    const users = await executeQuery('SELECT * FROM users WHERE user_email = $1', [email]);
    if (users.rows.length === 0) return res.status(401).json({error:"Email is incorrect"});
    // Vérification du mot de passe
    const validPassword = await bcrypt.compare(password, users.rows[0].user_password);
    if (!validPassword) return res.status(401).json({error: "Incorrect password"});
    // Génération et envoi des tokens JWT
    let tokens = jwtTokens(users.rows[0]); //Gets access and refresh tokens
    res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
    res.json(tokens);
  } catch (error) {
    res.status(401).json({error: error.message});
  }

});




// Cette route gère le renouvellement du token en utilisant le refresh token.
router.get('/refresh_token', (req, res) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    console.log(req.cookies);
    if (refreshToken === null) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
      if (error) return res.status(403).json({error:error.message});
      // Génération et envoi de nouveaux tokens JWT
      let tokens = jwtTokens(user);
      res.cookie('refresh_token', tokens.refreshToken, {...(process.env.COOKIE_DOMAIN && {domain: process.env.COOKIE_DOMAIN}) , httpOnly: true,sameSite: 'none', secure: true});
      return res.json(tokens);
    });
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});




// Cette route gère la suppression du refresh token en effaçant le cookie
router.delete('/refresh_token', (req, res) => {
  try {
    res.clearCookie('refresh_token');
    return res.status(200).json({message:'Refresh token deleted.'});
  } catch (error) {
    res.status(401).json({error: error.message});
  }
});

export default router;