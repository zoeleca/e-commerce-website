// generateSecret.js
const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};


// les clés générées sont à mettre dans les variables d'environnement du fichier .env
// elles sont secrètes et ne doivent pas être publiées
console.log('ACCESS_TOKEN_SECRET=' + generateSecretKey());
console.log('REFESH_TOKEN_SECRET=' + generateSecretKey());