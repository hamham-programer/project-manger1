const express = require("express")
const app = express()
const {allRouters}= require("./router/index")
app.use(allRouters)

    
app.listen(3000, ()=>{
    console.log("server run on port 3000");
})