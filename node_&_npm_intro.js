// The "npm init" command will create a 
// npm project

// Further Reading: https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
// the package nodemon is used to automatically restart the server . type : "nmp install --global nodemon" to install it
const http = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// var slugify = require('slugify')

// let a = slugify('some string') // some-string
// console.log(a)

// // if you prefer something other than '-' as separator
// const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
// console.log(b)