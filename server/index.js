const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('../database/db.js');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/register', (req, res) => {
  res.send('hello')
})

// app.post('/api/register', (req,res) => {
//   console.log(req.body.);
// })

app.post('/api/register', async (req, res) => {
  const { first_name, last_name, email, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  try {
    const result = await db.query('CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(50), password VARCHAR(50))');
    console.log('Table created');
    const insertUser = await db.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [first_name, last_name, email, password]);
    console.log('User inserted');
    res.status(200).json({ message: "Registered!!!" });
  } catch (err) {
    console.error('Error executing database query', err.stack);
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});