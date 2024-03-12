//Importation du module 'pg'
const { Client } = require("pg");

//Creation d'une instance du client PostgreSQL
const client = new Client({
  user: "morganelemoal",
  host: "localhost",
  database: "Lovechaise",
  password: "postgres",
  port: 5432,
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
const executeQuery = async (querySQL) => {
  try {
    const result = await client.query(querySQL);
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
module.exports = executeQuery;

/*exemple de requete

//importation function executeQuery 
const executeQuery = require('./dbConfig);

//Création requete SQL 
const userQuery = 'SELECT * FROM public.user_account ORDER BY id ASC';

//Utilisation de executeQuery function; 
async function runUserQuery() {
    try {
        const userAccounts = await executeQuery(userQuery);
        console.log('User accounts:', userAccounts);
    } catch (error) {
        console.error('Error fetching user accounts:', error.stack);
    }
}
runUserQuery();
*/
