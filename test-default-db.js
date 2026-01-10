const { Pool } = require('pg');

const connectionString = 'postgresql://postgres:postgres@localhost:5432/postgres';

console.log(`Testing connection to default local DB: ${connectionString}`);

const pool = new Pool({
    connectionString,
    connectionTimeoutMillis: 3000,
});

pool.connect()
    .then(client => {
        console.log("Successfully connected to the default local database!");
        client.release();
        pool.end();
    })
    .catch(err => {
        console.error("Default connection failed:", err.message);
        pool.end();
    });
