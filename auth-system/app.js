const express = require ("express")
const app = express()
const {default: mongoose} = require("mongoose");
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const DB_URL = "mongodb://127.0.0.1:27017/authorizathion-system";
mongoose.connect(DB_URL).then( () =>{
    console.log("server connected to mongodb")
})
.catch((err) => console.log(err.message))
const {notfoundError, errorHandler} = require("./utils/errorHandler")
const {AllRouters} = require("./router/index.routes")
app.use(AllRouters)
app.use(notfoundError) 
app.use(errorHandler) 

app.listen(3000, () =>{
    console.log("server run on port http://localhost:3000");
})