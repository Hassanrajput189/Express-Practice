
// npm install/i -y helps us to create a project with giving answers to any questions

// This statement is an example to export any content of a js file to another js file
// Their are two types of expor 

// 1- names export 
// 2- default export
// export const a = 1 // named export
// export const b = 2 // named export
// export const c = 3 // named export
// export const d = 4 // named export
// export const e = 5 // named export
 
// const obj = {
//     x: 5,
//     y: 7
// }

// export default obj; // default export

// This statement is an example to import the module or content of another js file
// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)


// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

const a = require("./mymodule2.js")

console.log(a, __dirname, __filename)