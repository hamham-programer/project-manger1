const usernamePassword = "hamham2024/09100639689"
const base64 =Buffer.from(usernamePassword).toString("base64")
console.log(base64);

const decodedPassword = Buffer.from(usernamePassword).toString("ascii")
const [username, password] = decodedPassword.split ("/")

console.log(username, password);



// Bearer aGFtaGFtMjAyNC8wOTEwMDYzOTY4OQ== 