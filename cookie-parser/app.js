const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.get("/set-cookie", (req,res,next) =>{
    res.cookie("cookieName", "cookieValue")
    res.cookie("programer", "expressjs")
})
app.get("/get-cookie", (req,res,next) =>{
    const cookies = req.cookie
    res.send({
        cookies,
        message:"get cookies"
    })
    
})

app.listen(3000, ()=>{
    console.log("server run on port 3000");
})

