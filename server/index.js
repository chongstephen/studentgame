const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
import axios from 'axios';

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

  res.send('Registerd!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})