const express = require("express")
const path = require("path")
const app = express()
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
app.use("/static",express.static("public")) // خواندن فایل های استایک مثل عکس
app.set("view engine", "pug") // ست کردن قالب pug
app.set ("views", path.join(__dirname, "views")) // خواندن از مسیر

const users = [
    {id:1,
    name:"ali"},
    {id:2,
    name:"maryam"}
]
app.get("/", (req,res,next) =>{
    res.render("index",{
        link:"https://botostart.ir",//نحوه استفاده از متغیرها
        section: "this is my section",
        users
    })
})
app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, () =>{
    console.log("server run on port 3000");
})