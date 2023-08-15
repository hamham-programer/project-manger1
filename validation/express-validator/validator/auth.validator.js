const { body } = require("express-validator");

const loginValidator = () =>[
    body("email").isEmail().withMessage("email is invalid"),
    body("password").isLength({min:6 , max:20}).withMessage("password is invalid")
]

const registerValidator = () =>[
    body("fullName").isLength({min:5, max:20}).withMessage("fullname is required"),
   // body("age").isNumeric().withMessage("age must tobe number"), روش برای نمایش سن
   body("age").custom(value =>{
    if(isNaN(value)){
        throw new Error ("age must to be number")
    }else if(+value>90 || +value<12){
        throw new Error ("your age is invalid")
    }
    return true
}),
    body("mobile").isMobilePhone("fa-IR", "en-US").withMessage("mobile format is invalid"),
    body("email").isEmail().withMessage("email is invalid"),
    body("password").isLength({min:6 , max:20}).withMessage("password is invalid"),
    body("confirm-password").custom((value, {req}) =>{
        if(value !== req.body.password){
            throw new Error("password does not match with confirmation")
        }
        return true
    })
]

module.exports ={
    loginValidator,
    registerValidator
}