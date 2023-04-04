const { Client } = require('pg');
require('dotenv').config({ path: '../.env' });

const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const sampleTable = `CREATE TABLE users (
  user_id serial PRIMARY KEY,
  firstname VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);`

db.query(sampleTable).then((response) => {
  console.log("Successful!", response);
}).catch((err) => {
  console.log("err cannot connect", err);
})



db.connect();


module.exports = db;
