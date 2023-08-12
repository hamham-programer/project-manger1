const express = require("express")
const path = require("path")
const hbs = require("hbs")
const app = express()
const blogs = require("./blogs.json")
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
hbs.registerPartials(path.join(__dirname, "views/partials"))
app.use(express.static("public")) // خواندن فایل های استایک مثل عکس
app.set("view engine", "hbs") // ست کردن قالب hbs
app.set ("views", path.join(__dirname, "views")) // خواندن از مسیر


app.get("/", (req,res,next) =>{
    res.render("index",{
        blogs
    })
})
app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, () =>{
    console.log("server run on port 3000");
})