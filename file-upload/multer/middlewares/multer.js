const multer =require("multer")
const path =require("path")
const fs =require("fs")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdirSync("public/upload", {recursive:true})
        cb(null, "public/upload")    
    },
    //روش اول
   /* filename: function (req, file, cb) {
    const ext = path.extname(file.originalname)
    const withlistformat = ["png", "jpg", "webp", "jpeg"]
    if (withlistformat.includes(ext)) {
        const fileName = Date.now() + ext;
        cb(null, fileName)
        }else {
            cb (new Error("only png, jpg, webp, jpeg  format allowed"))
        }
       
    }*/
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        //فیلتر کردن
        const withlistmimType = ["image/png", "image/jpg", "image/webp", "image/jpeg"]
        if (withlistmimType.includes(file.mimetype)) {
            const fileName = Date.now() + ext;
            cb(null, fileName)
            }else {
                cb (new Error("only png, jpg, webp, jpeg  format allowed"))
            }  
        }
})
const uploadfile = multer({storage})
module.exports ={
    uploadfile

}
