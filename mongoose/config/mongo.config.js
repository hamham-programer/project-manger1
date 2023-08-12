const {default: mongoose} = require("mongoose");
const DB_URL = "mongodb://127.0.0.1:27017/mongoose-db";
mongoose.set("strictQuery", true)
mongoose.connect(DB_URL).then(() =>{
    console.log( "server connected to mongodb");
})
.catch(err =>{
    console.log("error connection to mongodb", err);
})