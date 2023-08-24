const {Router} = require("express")
const router = Router()
const {AuthRouters} =require("./auth.routes")
router.use("/auth", AuthRouters)

module.exports ={
    AllRouters:router
}