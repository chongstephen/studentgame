const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/leaderboard', (req,res) => {
  res.send('leaderboard score')
})

app.get('/profile', (req,res) => {
  res.send('profile page')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})