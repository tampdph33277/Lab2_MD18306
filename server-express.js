const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello d!')
  console.log(`Example app listening o`)
})
app.get('/home2', (req, res) => {
    res.send('Hello d!')
    console.log(`Example app listening o`)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})