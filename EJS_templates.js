const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send("Hello World");
})


// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    
    // let arr = ["Hey", 54, 65]
    res.render("navbar", { siteName, searchText });
})



// app.get('/blog/:slug', (req, res) => {
//     let blogTitle = "Adidas why and when?"
//     let blogContent = "Its a very good brand"
//     res.render("blogpost", {blogTitle: blogTitle, blogContent: blogContent})
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})