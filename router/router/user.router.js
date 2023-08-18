const {Router} = require("express")
const router =Router()
router.get("/", (req,res,next) =>{
    console.log(req.time);
    res.send("created new user")
})

router.post("/", (req,res,next) =>{
    console.log(req.time);
    res.send("post new comment")
})


router.delete("/:id", (req,res,next) =>{
    res.send(`delete user by id #${req.params.id}`)
})

router.patch("/:id", (req,res,next) =>{
    res.send(`update user by id #${req.params.id}`)
})

module.exports={
    userRouter:router
}
