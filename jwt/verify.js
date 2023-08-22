const jwt = require("jsonwebtoken")
const secret = "d5eb7f3f6a3fd39e981bdb60bbcecf0c68ef0026"
//payload
const token = jwt.sign(
    {id:"ham2022", gmail:"hamidreza2332@gmail.com"},
     secret,
     {
        expiresIn: "3s"
       //algorithm : "HS512"
    }
)
console.log(token)
setTimeout(() => {
    try {
        const verifyToken= jwt.verify(token, secret)
   console.log(verifyToken);
        
    } catch (error) {
        console.log(error.message);
        
    }   
    
}, 2000);

setTimeout(() => {
    try {
        const decodedToken= jwt.verify(token)
   console.log(decodedToken);
        
    } catch (error) {
        console.log(error.message);
        
    }   
    
}, 2000);