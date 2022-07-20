const express = require('express')
const { start } = require('repl')
require('dotenv').config()
const app = express()
const port = 5000
const spawn = require('child_process').spawn

app.get('/', (req, res) => {
  res.send('hi')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('/j', (req, res) => {
  const axios = require('axios')

  const spawn = require('child_process').spawn
  obj = {
    name: 'John',
    age: 30,
    city: 'New York',
    result: null,
  }
  // let start = Date.now()
  // numbers = [1, 3, 4, 2]
  // // const process = spawn('python', ['./by.py', JSON.stringify(x)])
  // const process = spawn('python', ['./by.py', numbers])
  // process.stdout.on('data', (data) => {
  //   let z = Date.now()
  //   console.log(data.toString())
  //   let y = z - start
  //   console.log(y)

  //   res.send(data.toString())
  // })

  axios
    .post('http://127.0.0.1:3000/sum', obj, 'utf-8')
    .then((resi) => {
      console.log(`statusCode: ${resi.status}`)
      var red = resi.data
      console.log(resi.data)
      res.send(resi.data)
    })
    .catch((error) => {
      console.error(error)
    })
  // const process = spawn('python', ['./by.py', obj])
  // process.stdout.on('data', (data) => {
  //   console.log(data)
  // })
})
