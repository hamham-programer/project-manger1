const express = require("express")
const path = require("path")
const app = express()
const blogs = require ("./blogs.json")
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
app.use(express.static("public")) // خواندن فایل های استایک مثل عکس
app.set("view engine", "ejs") // ست کردن قالب ejs
app.set ("views", path.join(__dirname, "views")) // خواندن از مسیر


app.get("/", (req,res,next) =>{
    const h1 = "<h1>h1</h1>"
    res.render("index",{h1,
    blogs,
    blogTitle: "website"})
})
app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, () =>{
    console.log("server run on port 3000");
})