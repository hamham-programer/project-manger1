const express = require("express")
const path = require("path")
const app = express()
const {NotFoundError, ErrorHandler} = require("./util/errorHandler")
const omitEmpty = require("omit-empty");

app.use(express.json())
app.use(express.urlencoded({extended: true}))
require("./config/mongo.config.js")
const { BlogModel}=require("./model/blog.model")
app.get("/", (req,res,next) =>{
    res.send("index web")
})
//روش اول 
app.post("/create", async(req,res,next) =>{
    try {
        const {title,text}=req.body
        const result = await BlogModel.create({
        title,
        text
    })
    res.send(result)
        
    } catch (err) {
        next(err)
        
    }
})
//روش دوم
app.post("/new", async(req,res,next) =>{
    try {
        const {title,text}=req.body
        const result = new BlogModel({
        title,
        text
    })
    await result.save()
    res.send(result)
        
    } catch (err) {
        next(err)
        
    }
})
//روش سوم--ایجاد چندین دانکیومنت همزمان
app.get("/insert-many", async(req,res,next) =>{
    try {
        const {title,text}=req.body
        const result = await BlogModel.insertMany([
            {
                title: "1-title",
                text: "1-text"
            },
            {
                title: "2-title",
                text: "2-text"
            }
        ]
    )
    res.send(result)
        
    } catch (err) {
        next(err)
        
    }
})
//find کردن
app.get("/blogs", async(req,res,next) =>{
    try {
    const blogs = await BlogModel.find()
    res.send({
        statusCode: res.statusCode,
        documentCount: blogs.length,
        blogs
    })
        
    } catch (err) {
        next(err)
        
    }
})
//findone براساس id
app.get("/blogs/:id", async(req,res,next) =>{
    try {
    const {id} = req.params
    //ست کردن پیام مناسب برای زمانی که ای دی صحیح وجود ندارد
   // if(!isValidObjectId(id)) throw {statusCode:req.statusCode , message: "your id is not valid id"}
    const blogs = await BlogModel.findOne({_id:id})
    res.send({
        statusCode: res.statusCode,
        blogs
    })
        
    } catch (error) {
        next(error)
        
    }
})
 
//delete
app.delete("/blogs/:id", async(req,res,next) =>{
    try {
    const {id} = req.params
    //ست کردن پیام مناسب برای زمانی که ای دی صحیح وجود ندارد
   // if(!isValidObjectId(id)) throw {status:400 , message: "your id is not valid id"}
    const result = await BlogModel.deleteOne({_id:id})
    res.send({
        statusCode: res.statusCode,
        result
    })
        
    } catch (error) {
        next(error)
        
    }
})
//deletemany
app.delete("/blogs", async(req,res,next) =>{
    try {
    const result = await BlogModel.deletemany({})
    res.send({
        statusCode: res.statusCode,
        result
    })
        
    } catch (error) {
        next(error)
        
    }
})
//update
app.put("/blogs/:id", async(req,res,next) =>{
    try {
        const {id} = req.params
        const newblogObject= omitEmpty(req.body)
        const blog = await BlogModel.findOne({_id:id})
        if(!blog) throw{
            status: 404,
            message: "not found blog"
        }
        Object.assign(blog, newblogObject)
        await blog.save()
        res.send(blog)
        
    } catch (error) {
        
    }

})
//update روش دوم
/*app.patch("/blogs/:id", async(req,res,next) =>{
    try {
        const {id} = req.params
        const newblogObject= omitEmpty(req.body)
        const blog = await BlogModel.findOne({_id:id})
        if(!blog) throw{
            status: 404,
            message: "not found blog"
        }
        //Object.assign(blog, newblogObject)
       // await blog.save()
       const result = await BlogModel.updateOne({_id:id},{
        $set:newblogObject
       })
        res.send(result)
        
    } catch (error) {
        
    }

})*/
//findonandupdate روش سوم
app.patch("/blogs/:id", async(req,res,next) =>{
    try {
        const {id} = req.params
        const newblogObject= omitEmpty(req.body)
        const blog = await BlogModel.findOneAndUpdate({_id:id},{$set: newblogObject})

        res.send(blog)
        
    } catch (error) {
        
    }

})
app.use(NotFoundError),
app.use(ErrorHandler)

app.listen(3000, () =>{
    console.log("server run on port 3000");
})