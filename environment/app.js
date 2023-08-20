const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
app.get("/", (req,res,next) =>{
    console.log(process.env.APIKEY)
    res.send("dotenv")
})


app.listen(process.env.PORT, ()=>{
    console.log("server run on port"+ process.env.PORT);
})

