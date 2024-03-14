//Importation du module 'pg' et 'dotenv'
const { Client } = require("pg");
const dotenv = require("dotenv");

// lien avec le fichier de config .env à la racine du dossier Back-end
dotenv.config();

//Creation d'une instance du client PostgreSQL
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 3000,
});

// Connect to the database once
client
  .connect()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.error("Could not connect to database:", err.stack);
    process.exit(1); // Exit the process if connection fails
  });

//Execution de requêtes SQL
const executePostQuery = async (querySQL, params = []) => {
  try {
    const result = await client.query(querySQL, params);
    // console.log(result)
    return result.rows;
  } catch (err) {
    console.log("Error executing query:", err.stack);
    throw err;
  }
  // finally {
  //   if (client) {
  //     client.release();
  //   }
  // }
};

// Exportation de la fonction 'executeQuery'
module.exports = executePostQuery;