const express = require ("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const {ErrorHandler,NotFoundError } = require("./util/errorHandler")
//const {validate}=require("express-validation")
const {registerValidationSchema, loginValidationSchema}= require("./validator/auth.validation")

app.post("/login", async(req,res,next) =>{
    try {
        await loginValidationSchema.validateAsync(req.body)
        res.send(req.body)
        
    } catch (error) {
        next(error)
        
    }

})

app.post("/register", async(req,res,next) =>{
    try {
        await registerValidationSchema.validateAsync(req.body)
        res.send(req.body)
        
    } catch (error) {
        next(error)
        
    }

})

app.use(NotFoundError)
app.use(ErrorHandler)

app.listen(3000, ()=>{
    console.log("server run on port 3000");
})