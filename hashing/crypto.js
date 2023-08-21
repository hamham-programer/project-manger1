const crypto = require("crypto")

function hashPassword(password) {
    const salt = crypto.randomBytes(16).toString("hex")
    //console.log(salt, salt.length)
    const hash = crypto.pbkdf2Sync("123456", salt,1000,32, "sha512").toString("hex")
    const newhash = `$2s.${salt}.${hash}`
/*     console.log(hash, hash.length);
    console.log(newhash, newhash.length); */
    return newhash    
}

function verifyPassword(password,hashPassword) {
    const salt = hashPassword.split(".")?.[1]
    //console.log(salt, salt.length)
    const hash = crypto.pbkdf2Sync(password, salt,1000,32, "sha512").toString("hex")
    const newhash = `$2s.${salt}.${hash}`
/*     console.log(hash, hash.length);
    console.log(newhash, newhash.length); */
    return (newhash === hashPassword)    
}

const hashed = hashPassword("123456")
const result = verifyPassword("1234567",hashed )
console.log(result);
