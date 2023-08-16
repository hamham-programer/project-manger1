
const { Joi } = require("express-validation")

const loginValidation ={
    body: Joi.object({
        email: Joi.string().email().required(),
        password:Joi.string().min(6).max(20).required().regex(/[a-zA-Z0-9]{6,20}/),
    })
}
const registerValidation ={
    body: Joi.object({
        email: Joi.string().email().required(),
        username:Joi.string().alphanum().min(6).max(30).required(),
        password:Joi.string().min(6).max(20).required().regex(/[a-zA-Z0-9]{6,20}/),
        confirmpassword:Joi.ref("password"),
        age:Joi.number().integer().min(18).max(70)

    })
}
module.exports ={
    loginValidation,
    registerValidation
    
}