const express = require("express")
const app = express()
const serveFavIcon = require("serve-favicon")
const path = require("path")
app.use(serveFavIcon(path.join(__dirname,"images.png")))
app.get("/", (req,res,next) =>{
    res.send("favicon")
})

app.listen(3000, ()=>{
    console.log("server run on port 3000");
})

