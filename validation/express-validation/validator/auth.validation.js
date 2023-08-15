
const { Joi } = require("express-validation")

const loginValidation ={
    body: Joi.object({
        email: Joi.string().email().required(),
        password:Joi.string().min(6).max(20).required().regex(/[a-zA-Z0-9]{6,20}/),
    })
}
module.exports ={
    loginValidation
}