const express = require("express")
const path = require("path")
const app = express()
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require("./config/mongo.config.js")
app.get("/", (req,res,next) =>{
})

app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, () =>{
    console.log("server run on port 3000");
})