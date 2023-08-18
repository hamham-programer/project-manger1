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
    const withlistformat = ["PNG", "jpg", "webp", "jpeg"]
    if (withlistformat.includes(ext)) {
        const fileName = Date.now() + ext;
        cb(null, fileName)
        }else {
            cb (new Error("only png, jpg, webp, jpeg  format allowed"))
        }
       
    }*/
    
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname)
        const whiteListFormat = ['.png', '.jpg', '.jpeg', '.webp']
        const whiteListMimType = ['image/png', 'image/jpg', 'image/jpeg', 'image/webp']
        if(whiteListMimType.includes(file.mimetype)) {
            const fileName = Date.now() + ext;
            cb(null, fileName)
        }else {
            cb(new Error("only .png, .jpg, .jpeg, .webp format allowed"))
        }

    }
});
const _1MB = 1 * 1000 *1000
const _2MB = 2 * 1000 *1000
const _3MB = 3 * 1000 *1000
const _750kb = 768000 
const uploadfile = multer({
    storage,
    limits:{
        fileSize: _2MB
    }
})
module.exports ={
    uploadfile,

}
