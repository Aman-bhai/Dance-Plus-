const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path=require("path")
const ejs=require("ejs")
const express=require("express")

const port=5000


const app=express()


app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set("views", path.join(__dirname + "/views"))



app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/gallary",(req,res)=>{
    res.render("gallary")
})

app.get("/class-info",(req,res)=>{
    res.render("class")
})

app.get("/faculty",(req,res)=>{
    res.render("faculty")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})