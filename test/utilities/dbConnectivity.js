// db.js
import pkg from 'pg';
const { Client } = pkg;

// Create a new PostgreSQL client
const client = new Client({
    user: 'Pavithra2',
    host: 'qa-collections-20210306-primarydb.cqrcqbwovt1s.eu-west-1.rds.amazonaws.com',
    database: 'collections',
    password: 'Pavithra2',
    port: 5432, // Default PostgreSQL port
});

async function connectToDatabase() {
    try {
        // Connect to the database
        
        console.log("________________________Before connect!___________________")
        await client.connect();
        await browser.pause(60000)
        console.log('Connected to PostgreSQL database');
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}

async function performDatabaseOperation() {
    try {
        // Example query
        const res = await client.query('querry');
        console.log('Query result:', res.rows[0].message);
    } catch (error) {
        console.error('Error performing database operation:', error);
    } finally {
        // Close the client
        await client.end();
    }
}

export default { connectToDatabase, performDatabaseOperation };
