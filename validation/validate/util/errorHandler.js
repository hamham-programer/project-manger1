const {validationMapper} = require("./joi.validation.mapper")

const NotFoundError = (req, res, next) =>{
    return res.status(404).json ({
        statusCode: res.statusCode,
        error: {
            type: "Not Found",
            message: "Not Found" + req.url + "route"
        }
    })
}

const ErrorHandler =(err, req, res, next) =>{
  //  console.log(JSON.stringify(err,null,4))
    return res.json({
        statusCode: err.status || err.statusCode || 500,
        error: {
            message: err.message || "internal Server Error",
            invalidparams: validationMapper(err)
        }
    })
}
module.exports ={
    NotFoundError,
    ErrorHandler
}