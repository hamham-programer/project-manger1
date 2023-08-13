const express = require("express")
const path = require("path")
const app = express()
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
require("./config/mongo.config.js")
const { BlogModel}=require("./model/blog.model")
app.get("/", (req,res,next) =>{
    res.send("index web")
})

app.post("/create", async(req,res,next) =>{
    try {
        const {title,text}=req.body
       const result = await BlogModel.create({
        title,
        text
    })
    res.send(result)
        
    } catch (err) {
        next(err)
        
    }
})

app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, () =>{
    console.log("server run on port 3000");
})