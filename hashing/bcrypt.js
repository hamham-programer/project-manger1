const bcrypt = require("bcrypt")
const hash = bcrypt.genSaltSync(10)
console.log(hash, hash.length);