const express = require ("express")
const app = express()

app.get("/", (req,res) =>{
    console.log(bb);
    res.send("index addresing")
})

app.use((req,res,next)=>{
    return res.status(404).json({
        statusCode:res.statusCode,
        error:{
            type:"Not found",
            message:"notfound"+ req.url+ "route"
        }
    })
})

app.use((err,req,res,next) => {
    return res.json({
        statusCode : err.statusCode || 500,
        error: {
            message:err.message || "internal server error"

        }
    })
    
})

app.listen(3000, ()=>{
    console.log("server run on port 3000");
})