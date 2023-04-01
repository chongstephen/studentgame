require('dotenv').config({path: './studentgame/.env'});
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});


pool.query(`SELECT 1 FROM pg_database WHERE datname='${process.env.DB_NAME}'`)
  .then((result) => {
    if (result.rows.length === 0) {
      return pool.query(`CREATE DATABASE ${process.env.DB_NAME}`);
    }
  })
  .then(() => {
    console.log("Database created!");
  })
  .catch((err) => {
    console.log('Error creating database:', err);
  });


module.exports = pool;