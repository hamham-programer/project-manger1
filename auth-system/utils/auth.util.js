const {genSaltSync, hashSync, compareSync} = require ("bcrypt")
const secret = "d5eb7f3f6a3fd39e981bdb60bbcecf0c68ef0026"
const jwt = require("jsonwebtoken")

function hashpassword(password) {
    const salt = genSaltSync(13)
    return hashSync(password, salt)
    
}

function comparepassword(password, hashed) {
    return compareSync(password, hashed)
}

function signToken(payload) {
    return jwt.sign(payload, secret)
 
  }
  function VerifyToken(token) {
    return jwt.verify(token, secret)
 
  }
module.exports ={
  hashpassword,
    comparepassword,
    signToken,
    VerifyToken
}