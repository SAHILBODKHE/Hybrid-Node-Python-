const spawn = require('child_process').spawn
x = {
  name: 'John',
  age: 30,
  city: 'New York',
}
const process = spawn('python', ['./by.py', JSON.stringify(x)])
process.stdout.on('data', (data) => {
  console.log(data.toString())
})
