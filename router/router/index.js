const {Router} = require("express")
const router =Router()
const {userRouter}= require("./user.router")
const {commentRouter}= require("./comment.router")
const {blogRouter}= require("./blog.router")
//const {userRouter}= require("./auth.router")

//ست کردن یک میدلویر جهت استفاده در تمامی روت ها
function getTIME(req,res,next) {
    req.time = Date.now()
    next()
}
//app.use(getTime)
router.use("/user",getTIME, userRouter),
router.use("/comment",getTIME, commentRouter),
router.use("/blog",getTIME, blogRouter)


module.exports={
    allRouters:router
}
