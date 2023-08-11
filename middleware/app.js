const express = require ("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded())

function getTime(req,res,next) {
    req.time=Date.now()  
    next() 
}

function checkAut(req,res,next) {
    const{username, password}=req.query 
    if(username =="hamidreza" & password == "1234"){
        return next()
    }
    res.send("Authinticatin is failed")

}
app.use(getTime)

app.use((res,req, next) =>{
    console.log("log1");
    next()
})
app.use((res,req, next) =>{
    console.log("log2");
    next()
    
})
app.get("/users", checkAut,getTime, (req,res,next) =>{
    res.send("users")
    console.log(req.time)

})
app.get("/", (req,res,next) =>{
    console.log("Response route");
    res.send("finish route")
    console.log(req.time);
})


app.listen(3000, ()=>{
    console.log("server run on port 3000");
})