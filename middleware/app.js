const express = require ("express")
const morgan = require("morgan")
const omitEmpty = require("omit-empty")
const app = express()
const camelcase = (...args) => import("camelcase-keys").then(({default:camelCasekeys}) =>camelCasekeys(...args))
app.use(morgan("tiny"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
//Delete empty items
/*console.log(omitEmpty({
    a:1,
    b:[],
    name:"hamidreza",
    c:0
},{omitZero:true}))*/

function removeemptyfildes(options={}){
    return function(req,res,next){
        req.body = omitEmpty(req.body, options)
        next()
    }

}
async function camelcasekey (req,res,next){
    req.body=await camelcase(req.body, {deep:true});
    req.query=await camelcase(req.query);
    req.params=await camelcase(req.params)
    next()
}
/*function getTime(req,res,next) {
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
//camelcase
app.get("/", (req,res,next) =>{
    console.log("Response route");
    res.send("finish route")
    console.log(req.time);
})*/
app.get("/blogs", async(req,res) =>{
 //   console.log(await camelcase({"firstname" : "hamidreza"}));

    res.send({
        body:req.body,
        query:req.query,
        params:req.params
    })
})

app.post("/creat", removeemptyfildes(), (req,res,next) =>{
    res.send(req.body)
})
app.listen(3000, ()=>{
    console.log("server run on port 3000");
})