const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
// import axios from 'axios';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/leaderboard', (req,res) => {
  res.send('leaderboard score')
})

app.get('/profile', (req,res) => {
  res.send('profile page')
})


app.post('/register', async (req, res) => {
  const {firstName, lastName, email, password, confirmPassword} = req.body;
  const registeredUsers = [
    { email: "test@example.com", password: "password" },
    { email: "test2@example.com", password: "password" },
  ];
  if(password !== confirmPassword) {
    return res.status(400).json({message: "Passwords do not match"});
  }

  try {
    const result = await pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, password]);
    console.log(result);
    res.status(200).json({ message: "Registered!!!" });
  } catch (err) {
    console.error('Error executing database query', err.stack);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})