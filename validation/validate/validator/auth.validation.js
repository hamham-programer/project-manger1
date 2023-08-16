const Schema= require("validate")
const registerSchema = new Schema({
    username: {type:String, required:true, length: {min:4, max:20},message:{type:"msg1", required:"msg2", length:"msg3"}},
    email: {type:String, required:true,match: /[a-z0-9\.\_]{5,20}@[a-z]{2,15}.[a-z]{2,10}/gi, message:{type:"email must to be string", match:"email data is invalid"}},
    role: {type:String,enum: ["user","teacher","admin"], message:{type:"role must to be string", enum:"enum must to be user ||teacher ||admin"}}
})
module.exports ={
    registerSchema
}