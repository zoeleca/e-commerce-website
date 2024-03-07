//Importation du module 'pg'
const { Client } = require('pg');

//Creation d'une instance du client PostgreSQL
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'Lovechaise',
    password: 'tralala',
    port: 5432,
    connectionTimeoutMillis: 5000,
    idleTimeoutMillis: 3000
});


//Connection à la DB
const connectClient = async () =>{
    try {
        await client.connect();
        console.log('Connected to database'); 
        return client;
    }catch (err) {
        console.error('Could not connect to database:', err.stack);
        throw err;
    }
}

//Execution de requêtes SQL
const executeQuery = async (querySQL) => {
    try {
        const connectedCLient = await connectClient();
        const result = await connectedCLient.query(querySQL);
        // console.log(result)
        return result.rows;
    }catch (err){
        console.log('Error executing query:', err.stack);
        throw err;
    }finally{
        await client.end();
    }
}

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
