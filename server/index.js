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


app.post('/register', (req, res) => {
  const {firstName, lastName, email, password, confirmPassword} = req.body;
  const registeredUsers = [
    { email: "test@example.com", password: "password" },
    { email: "test2@example.com", password: "password" },
  ];
  if(password !== confirmPassword) {
    return res.status(400).json({message: "Passwords do not match"});
  }
  registeredUsers.push({firstName, lastName, email, password});
  res.status(200).json({message: "Registered!!!"})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})