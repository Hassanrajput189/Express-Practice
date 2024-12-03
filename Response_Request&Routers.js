const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
 


const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get('/', (req, res) => {
    console.log("Hey its a get request")
    res.send('Hello World21!')
}).post('/', (req, res) => {
    console.log("Hey its a post request")
    res.send('Hello World post!')
})

app.put('/', (req, res) => {
    console.log("Hey its a put request")
    res.send('Hello World put!')
})

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] 
        
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//  create file : blog.js 
// const express = require('express')
// const router = express.Router()

// // define the home page route
// router.get('/', (req, res) => {
//   res.send('Blog home page')
// })

// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About blog')
// })

// // define the about route
// router.get('/blogpost/:slug', (req, res) => {
//   res.send(`fetch the blogpost for ${req.params.slug}`)
// })

// module.exports = router

// create file : shop.js 
// const express = require('express')
// const router = express.Router()

// // define the home page route
// router.get('/', (req, res) => {
//   res.send('Shop home page')
// })

// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About shop')
// })
 

// module.exports = router