const express = require("express")
const app = express()

const users =[
    {id:1 , name:"user1"},
    {id:2 , name:"user2"},
    {id:3 , name:"user3"}]
const products =[
    {id:1 , name:"product1"},
    {id:2 , name:"product2"},
    {id:3 , name:"product3"}]
app.get("/", (req, res) =>{
    console.log("welcome to expressjs...")
   // res.send ("hello express")
   // res.send ("<h1>hello express</h1>")
      res.send ({message:"hello express"})
})

app.get("/iran", (req,res) =>{
    res.status(200).send("hello iran")
})

app.get("/users/:id", (req,res) =>{
    const id = req.params.id
    const user = users.find(user => user.id == id)
    if(!user){
        res.status(404).json({
            statusCode: res.statusCode,
            error: {
                            }
        })} else{
       // res.status(200).send(user)
       res.status(200).json({
        statusCode: 200,
        data: {
            user
        }
       })
    }
    })


app.get("/products/:id?", (req,res) =>{
        const {id} = req.params
        if(id){
            const product = products.find(product => product.id == id)
            return res.json({
                statusCode: res.statusCode,
                data: {
                    product
                }
            })

        }
        res.json({
            statusCode: res.statusCode,
            data: {
                products
            }
        })
        
    })

    
app.listen(3000, ()=>{
    console.log("server run on port 3000");
})