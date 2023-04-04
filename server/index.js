const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const db = require('../database/db.js')
const cors = require('cors');
const Leaderboard = require('./src/component/Leaderboard.jsx')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/register', async (req,res) => {
  try{
   const example = await db.query('SELECT * FROM studentgame')
   res.json(example.rows)
  } catch(err) {
    console.log(err)
  }
})


// app.post('/register', async (req, res) => {
//   const {firstName, lastName, email, password, confirmPassword} = req.body;
//   const registeredUsers = [
//     { email: "test@example.com", password: "password" },
//     { email: "test2@example.com", password: "password" },
//   ];
//   if(password !== confirmPassword) {
//     return res.status(400).json({message: "Passwords do not match"});
//   }

//   try {
//     const result = await pool.query('INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)', [firstName, lastName, email, password]);
//     console.log(result);
//     res.status(200).json({ message: "Registered!!!" });
//   } catch (err) {
//     console.error('Error executing database query', err.stack);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });

app.post('/login', async (req,res) => {
  const {email, password} = req.body;
  try {

  } catch (err) {
    console.log(err)
  }
})

app.get('/leaderboard', (req, res) => {
  res.render('leaderboard', { leaderboard: Leaderboard });
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})