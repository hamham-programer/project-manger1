 const {userModel} = require("../model/user.model")
 //const {hashpassword} = require("../utils/auth.util")
//const {signToken,VerifyToken} = require ("../utils/auth.util")
const { hashpassword, comparepassword, signToken } = require("../utils/auth.util")


 async function register  (req,res,next) {
   try{
      const {fullName, email, password}= req.body
      const user =await userModel.create({
         fullName,
         email,
         password : hashpassword(password)
      })
      res.send(user)
   } catch(error){
      next(error)
   }
 }

async function login(req,res,next) {
  try{
   const {email, password} = req.body
   const user = await userModel.findOne({
      email
   })
   if (!user){
      throw {status:400, message:"not found user"}
   }
   if (comparepassword(password, user.password)){
      const token =signToken({id:user._id, email:user.email})
      res.send({token,message: "login-system"})
      
   } else{
      throw {
         status: 400,
         message: "email or password incorrect"
      }
   }
  } catch(error){
   next(error)
  }    
 }


 module.exports ={
    register,
    login
 }