const { Client } = require('pg');
require('dotenv').config({ path: '../.env' });

const db = new Client({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const sampleTable = `CREATE TABLE IF NOT EXISTS users (
  user_id serial PRIMARY KEY,
  first_name VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);`

db.query(sampleTable).then((response) => {
  console.log("Successful!");
}).catch((err) => {
  console.log("err cannot connect", err);
})



db.connect();

const addScore = async (user_id, score) => {
  const query = `INSERT INTO scores (user_id, score) VALUES ($1, $2)`;
  const values = [user_id, score];
  try {
    const result = await db.query(query, values);
    console.log(`Score ${score} added for user ${user_id}`);
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  db,
  addScore
}
