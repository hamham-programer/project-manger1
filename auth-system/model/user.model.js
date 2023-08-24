const {default:mongoose }= require("mongoose")
const userSchema = new mongoose.Schema({
    fullName:{type:String , unique:true, required:true},
    email:{type:String , unique:true, required:true},
    password:{type:String , unique:true, required:true}
},{
    timestamps:true
})

const userModel = mongoose.model("blog", userSchema)

module.exports={
    userModel
}