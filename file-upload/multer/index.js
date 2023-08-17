const express = require ("express")
const multer = require("multer")
const app =express()
app.use(express.json()),
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
const {uploadfile} = require("./middlewares/multer")
//روش ارسال یک عکس
app.post("/upload-single",uploadfile.single("image"), (req,res,next)=>{
    console.log(req.file);
    res.send(req.file)
})
//روش ارسال آرایه files
app.post("/upload-array", uploadfile.array("image", 2),(req, res) => {
    console.log(req.body);
    res.send(req.files)
})
app.post("/upload-fields", uploadfile.fields( [
    {name: "image", maxCount:1},
    {name: "file", maxCount:1}
]),(req, res) => {
    console.log(req.body);
    res.send(req.files)
})
app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, ()=>{
    console.log("servr run on port3000" );
})