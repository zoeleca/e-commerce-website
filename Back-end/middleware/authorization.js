// [WIP]authorization.js

import jwt from 'jsonwebtoken';


const authenticateToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Non authentifié' });
    }
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    if (req.user && req.user.role === 'superuser') {
      // Si oui, autoriser l'accès au prochain middleware ou à la route
      return next();
      }
  } catch




  // const authHeader = req.headers['authorization'];

  // const token = authHeader && authHeader.split(' ')[1];

  // if (token == null) return res.status(401).json({error:"Null token"});

  // jwt.verify(token, ACCESS_TOKEN_SECRET, (error, user) => {
  //   if (error) return res.status(403).json({error : error.message});
  //   req.user = user;
  //   next(); 
  // });
}

export {authenticateToken};


// // middleware/authenticateToken.js
// const jwt = require('jsonwebtoken');
// const { ACCESS_TOKEN_SECRET } = process.env;

// const authenticateToken = (req, res, next) => {
//   try {
//     // 1. Vérifier si le jeton est fourni dans l'en-tête Authorization
//     const token = req.headers.authorization.split(' ')[1];
    
//     if (!token) {
//       // Si le jeton n'est pas fourni, renvoyer une erreur non authentifiée
//       return res.status(401).json({ error: 'Non authentifié' });
//     }

//     // 2. Vérifier si le jeton est valide
//     const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
    
//     // 3. Ajouter les informations utilisateur décodées à la demande pour une utilisation ultérieure
//     req.user = decoded;

//     // 4. Vérifier si l'utilisateur a le rôle de super utilisateur
//     if (req.user && req.user.role === 'superuser') {
//       // Si oui, autoriser l'accès au prochain middleware ou à la route
//       return next();
//     }

//     // 5. Si l'utilisateur n'est pas un super utilisateur, renvoyer une erreur d'autorisation
//     return res.status(403).json({ error: 'Accès interdit' });
//   } catch (error) {
//     // 6. Si une erreur se produit lors de la vérification du jeton, renvoyer une erreur non authentifiée
//     return res.status(401).json({ error: 'Non authentifié' });
//   }
// };

// module.exports = authenticateToken;