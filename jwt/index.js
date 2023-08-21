const jwt = require("jsonwebtoken")
const secret = "d5eb7f3f6a3fd39e981bdb60bbcecf0c68ef0026"
//payload
const token = jwt.sign(
    {id:"ham2022", gmail:"hamidreza2332@gmail.com"},
     secret,{
        expiresIn:1000*60*60*24*1,//1s 1second 1day ,...,
        algorithm : "HS512"
}
)
console.log(token);