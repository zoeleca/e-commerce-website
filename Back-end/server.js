// server.js

// création d'un serveur http qui répond à toutes les requêtes et écoute le port

// importe le module http de Node
const http = require('http');

// importe l'application Express depuis app.js
const app = require('./app');

// on indique le port sur lequel express doit tourner
app.set('port', process.env.PORT || 3000);

// crée un serveur http en appelant la fonction createServer du module http
const server = http.createServer(app);

// le serveur écoute les connexions entrantes sur le port spécifié dans les var d'env (ou sur 3000)
server.listen(process.env.PORT || 3000);