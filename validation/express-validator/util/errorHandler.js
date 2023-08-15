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
    return res.json({
        statusCode: err.statusCode || 500,
        error: {
            message: err.message || "internal Server Error",
            invalidparams: err.error
        }
    })
}
module.exports ={
    NotFoundError,
    ErrorHandler
}