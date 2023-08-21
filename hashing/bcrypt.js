const bcrypt = require("bcrypt")

function hashpassword(password) {
    const salt = bcrypt.genSaltSync(10)
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
