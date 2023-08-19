const express = require("express")
const app = express()
const serveIndex = require("serve-index")
const path = require("path")
app.use("/ftp",express.static("public/ftp"))
app.use("/ftp",serveIndex("public/ftp", {icons:true, stylesheet: "style.css"}))
app.get("/", (req,res,next) =>{
    res.send("favicon")
})

app.listen(3000, ()=>{
    console.log("server run on port 3000");
})

