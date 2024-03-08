//Importation du module 'pg'
const { Client } = require("pg");

//Creation d'une instance du client PostgreSQL
const client = new Client({
<<<<<<< HEAD
  user: "postgres",
  host: "localhost",
  database: "Lovechaise",
  password: "hello",
  port: 5432,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 3000,
=======
    user: 'morganelemoal',
    host: 'localhost',
    database: 'Lovechaise',
    password: 'postgres',
    port: 5432,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 3000
>>>>>>> 5867c9ad06dbba4567f3b587056c84e9d9dad936
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
<<<<<<< HEAD
  try {
    const result = await client.query(querySQL);
    // console.log(result)
    return result.rows;
  } catch (err) {
    console.log("Error executing query:", err.stack);
    throw err;
  } finally {
    if (client) {
      client.release();
=======
    try {
        const connectedCLient = await connectClient();
        const result = await connectedCLient.query(querySQL);
        return result.rows;
    }catch (err){
        console.log('Error executing query:', err.stack);
        throw err;
    }finally{
        await client.end();
>>>>>>> 5867c9ad06dbba4567f3b587056c84e9d9dad936
    }
  }
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
