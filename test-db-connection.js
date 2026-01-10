require('dotenv').config();
const { Pool } = require('pg');

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
    console.error("DATABASE_URL is not defined in .env");
    process.exit(1);
}

// Mask password for safe logging
const maskedUrl = dbUrl.replace(/:([^:@]+)@/, ':****@');
console.log(`Testing connection to: ${maskedUrl}`);

const pool = new Pool({
    connectionString: dbUrl,
    connectionTimeoutMillis: 5000,
});

pool.connect()
    .then(client => {
        console.log("Successfully connected to the database!");
        return client.query('SELECT NOW()')
            .then(res => {
                console.log("Database time:", res.rows[0].now);
                client.release();
                pool.end();
            });
    })
    .catch(err => {
        console.error("Connection failed:", err);
        pool.end();
    });
