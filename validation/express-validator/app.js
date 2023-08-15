const express = require ("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const {ErrorHandler,NotFoundError } = require("./util/errorHandler")
const {loginValidator,registerValidator} = require("./validator/auth.validator")
const {checkValidation} =require("./middlewares/validation")
const {validationResult} = require("express-validator")
const {IdValidator}= require("./validator/blog.validator")
const {queryValidator}= require("./validator/query.validator")

//validation in login
app.post("/login",loginValidator(), (req,res) =>{
    const error = validationResult(req)
    //روش اول تنظیم کردن ارورها
   /* const result = error?.errors?.map(err =>{
        return {[err.path] : err.msg}
    })
    res.send(result)*/
    //روش دوم
    let obj ={}
    error?.errors?.forEach(err => {
        obj[err.path] = err.msg
        
    });
    res.send(obj)
})

//هندل کردن خطاها را بصورت یک میدلویر می نویسیم 
app.post("/register",registerValidator(),checkValidation ,(req,res) =>{

    res.send(req.body)
});
//اعتبارسنجی param,query
app.get("/blogs/:id",IdValidator,queryValidator,checkValidation ,(req,res) =>{

    res.send(req.params)
});

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, ()=>{
    console.log("server run on port 3000");
})