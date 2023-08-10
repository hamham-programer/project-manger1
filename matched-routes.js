const express = require("express")
const app = express()

const users =[
    {id:1 , name:"user1"},
    {id:2 , name:"user2"},
    {id:3 , name:"user3"}]
const products =[
    {id:1 , name:"product1"},
    {id:2 , name:"product2"},
    {id:3 , name:"product3"}]

app.get("/file.txt", (req, res) =>{
    res.send ("Accpted:"+ req.url)
})

/*app.get("/ab?cd", (req, res) =>{//abcd- acd
    res.send ("Accpted:"+ req.url)
})*/

/*app.get("/ab+cd", (req, res) =>{//abcd - abbbbbbbb cd
    res.send ("Accpted:"+ req.url)
})*/

/*app.get("/ab*cd", (req, res) =>{//abcd- ab(alphbet,nummric) cd
    res.send ("Accpted:"+ req.url)
})*/
 
/*app.get("/ab(cd)?e", (req, res) =>{//abcde || abe
    res.send ("Accpted:"+ req.url)
})*/

/*app.get(/a/, (req, res) =>{//abcde || abe
    res.send ("Accpted:"+ req.url)
})*/

app.get(/.*nodejs$/ig, (req, res) =>{//abcde || abe
    res.send ("Accpted:"+ req.url)
})
app.listen(3000, ()=>{
    console.log("server run on port 3000");
})