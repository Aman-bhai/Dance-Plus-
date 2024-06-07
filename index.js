const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { hashSync } = require('bcrypt')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const mongoConnect=require("./utils/database")
let { body, validationResult } = require('express-validator')
const path=require("path")

const ejs=require("ejs")

const express=require("express")

const port=5000

const dotenv = require('dotenv')
dotenv.config()


const app=express()

mongoConnect

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

app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/signup",(req,res)=>{
    res.render("signup")
})

app.listen(port,()=>{
    console.log(`Server is listening at http://localhost:${port}`)
})