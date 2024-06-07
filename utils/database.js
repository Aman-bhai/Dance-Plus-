const mongoose = require("mongoose")

let mongoConnect=mongoose.connect("mongodb://localhost:27017/DanceWeb").then(() => {
    console.log("server is connected with database")
}).catch((err) => {
    console.log(err)
})


module.exports=mongoConnect
