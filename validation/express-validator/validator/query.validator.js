const {query}=require("express-validator");

const queryValidator() =>{[
    
    query("title").isEmpty().isString().matches(/[a-zA-z0-9]*/gim),
    query("sort").matches(/ASC|DESC/)
]}



module.exports ={
    queryValidator
}