const express = require("express")
const app = express()

app.get("/", (req, res) =>{
    console.log("welcome to expressjs...")
   // res.send ("hello express")
   // res.send ("<h1>hello express</h1>")
      res.send ({message:"hello express"})
    

})

app.listen(3000, ()=>{
    console.log("server run on port 3000");
})