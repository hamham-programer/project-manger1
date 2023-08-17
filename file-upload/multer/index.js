const express = require ("express")
const multer = require("multer")
const app =express()
app.use(express.json()),
app.use(express.urlencoded({extended:true}))
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")

app.use(express.static("public"))
const {uploadfile} = require("./middlewares/multer")
app.post("/upload",uploadfile.single("image"), (req,res,next)=>{
    console.log(req.file);
    res.send(req.file)
})
app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, ()=>{
    console.log("servr run on port3000" );
})