const {Router} = require("express")
const router =Router()
router.get("/", (req,res,next) =>{
    console.log(req.time);
    res.send("created new blog")
})

router.post("/", (req,res,next) =>{
    console.log(req.time);
    res.send("post new blog")
})

router.delete("/:id", (req,res,next) =>{
    res.send(`delete blog by id #${req.params.id}`)
})

router.patch("/:id", (req,res,next) =>{
    res.send(`update blog by id #${req.params.id}`)
})

module.exports={
    blogRouter:router
}
