const crypto = require("crypto")
const secret = crypto.randomBytes(16).toString("hex")
const hash = crypto.createHash("sha512",secret).update("expressjs").digest("hex")
console.log(hash, hash.length);