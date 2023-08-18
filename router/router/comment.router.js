const {Router} = require("express")
const router =Router()
router.get("/", (req,res,next) =>{
    console.log(req.time);
    res.send("created new comment")
})

router.post("/", (req,res,next) =>{
    console.log(req.time);
    res.send("post new comment")
})

router.delete("/:id", (req,res,next) =>{
    res.send(`delete comment by id #${req.params.id}`)
})

router.patch("/:id", (req,res,next) =>{
    res.send(`update comment by id #${req.params.id}`)
})

module.exports={
    commentRouter:router
}
