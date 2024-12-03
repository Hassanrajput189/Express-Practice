
// path module
// import path from "path"

// let myPath = "C:\\Users\\iitia\\Downloads\\Sigma Web Development Course\\Sigma-Web-Dev-Course\\Video 87\\harry.txt"
// console.log(path.extname(myPath))

// console.log(path.dirname(myPath))
// console.log(path.basename(myPath))

// console.log(path.join("c:/", "programs\\harry.txt"))

//  fs module using callBacks
// const fs = require("fs")
// // const fs = require("fs/promises")
 
// console.log("starting")
// // fs.writeFileSync("harry.txt", "Harry is a good boy")

// fs.writeFile("harry2.txt", "Harry is a good boy2", ()=>{
//     console.log("done")
//     fs.readFile("harry2.txt", (error, data)=>{
//         console.log(error, data.toString())
//     })
// })

// fs.appendFile("harry.txt", "harryrobo", (e, d)=>{
//     console.log(d)
// })


// fs new module that uses promises
// console.log("ending")

// import fs from "fs/promises"

// let a = await fs.readFile("harry.txt")

// let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")
// console.log(a.toString(), b)
