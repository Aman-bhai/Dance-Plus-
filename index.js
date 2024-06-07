const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { hashSync } = require('bcrypt')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const passport = require('passport')
const mongoConnect = require("./utils/database")
const Contact = require("./model/contact.model")
let { body, validationResult } = require('express-validator')
const path = require("path")

const ejs = require("ejs")

const express = require("express")

const port = 5000

const dotenv = require('dotenv')
dotenv.config()


const app = express()

mongoConnect

app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.set("views", path.join(__dirname + "/views"))



app.get("/", (req, res) => {
    res.render("home")
})

app.get("/gallary", (req, res) => {
    res.render("gallary")
})

app.get("/class-info", (req, res) => {
    res.render("class")
})

app.get("/faculty", (req, res) => {
    res.render("faculty")
})

app.get("/success", (req, res) => {
    res.status(200).json("Thank You For Contacting Us!")
})


app.get("/contact", (req, res) => {
    res.render("contact")
})


app.post("/contact", [
    body('name').notEmpty(),
    body('email').notEmpty(),
    body('number').notEmpty()
], (req, res) => {
    let error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() })
    }
    let contacts = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.number,
        address: req.body.address,
        goal: req.body.goal

    }
    Contact.create(contacts)
    res.redirect("/success")


    res.redirect("/contact")
})
app.get("/login", (req, res) => {
    res.render("login")
})
app.get("/signup", (req, res) => {
    res.render("signup")
})

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})