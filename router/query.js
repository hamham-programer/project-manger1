const express = require("express")
const app = express()
const post = require("./post.json")
const querystring = require("querystring")
app.get("/", (req,res) =>{
    console.log(querystring.parse("key1=value&key2=valu2"));
    console.log(querystring.stringify({
        key1:"value",
        key2:"valu2"
    }));
    const {key1,key2} =req.query

    res.send({key1,key2,url:req.url})
})

app.get("/blogs", (req,res) =>{
    const {title,body} = req.query
    const regexTitle = new RegExp(title ?? "", "gi")
 //   const regexbody = new RegExp(body ?? "", "gi")

    //const filter = post.filter(post => (post.title.match(regexTitle)) || (post.body.match(regexbody)))
    const filter = post.filter(post => post.title.match(regexTitle))

    res.send({post: filter})
})


app.listen(3000, ()=>{
    console.log("server run on port 3000");
})
