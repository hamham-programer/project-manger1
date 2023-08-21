const crypto =require ("crypto")
const fs = require ("fs")
const filename = "index.txt"
const md5um = crypto.createHash("md5")
const stream = fs.ReadStream(filename)

stream.on("data", (data) =>{
    md5um.update(data)

})

stream.on("end", () =>{
    const hash = md5um.digest("hex")
    fs.writeFile("hash.txt", hash, (err =>{
        if (err) console.log(err);
    }))
})