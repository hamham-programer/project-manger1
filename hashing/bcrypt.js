const bcrypt = require("bcrypt")
//rounds => 1-13 ~ (0-1)sec
//rounds => 13-15 ~ (1-4)sec
//rounds => 15-18 ~ (3-1800)sec

function hashpassword(password) {
    const salt = bcrypt.genSaltSync(13)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  //  console.log(hash, hash.length);
}

function verifypassword(password,hashPassword) {
     return bcrypt.compareSync(password,hashPassword)
     
}

const hash = hashpassword("123456")
const result = verifypassword("1234567",hash )
console.log(result);
