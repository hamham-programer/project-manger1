const express = require ("express")
const app =express()
const fileUpload = require("express-fileupload")
const fs = require("fs")
const path = require("path")

app.use(express.json()),
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
//app.use(fileUpload({abortOnLimit:true, Limits: {fileSize:15000}}))
app.use(fileUpload())

const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
app.post("/upload-buffer", (req,res)=>{
    if(!req.files || Object.keys(req.files).Length ==0 ){
        throw {status:400 ,message: "no file were uploaded"}
    }
    const image = req.files.image
    const ext = path.extname(image.name)
    const destpath= path.join(__dirname,"public","upload",Date.now()+ext)
    const buffer = Buffer.from(image.data)
    fs.writeFileSync(destpath,buffer)
    res.send(req.files)
})
//روش دوم
app.post("/upload-mv", async (req,res)=>{
    if(!req.files || Object.keys(req.files).Length ==0 ){
        throw {status:400 ,message: "no file were uploaded"}
    }
    for (const key in req.files) {
        let file = req.files[key]
        const ext = path.extname(file.name)
        const destpath= path.join(__dirname,"public","upload",Date.now()+ext)
        const result = await new Promise((resolve, reject) =>{
            file.mv(destpath, (err) =>{
               if (err) reject(err)
               else resolve(true)
            })        
        })
   }
      res.send(req.files)
})


app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, ()=>{
    console.log("servr run on port3000" );
})