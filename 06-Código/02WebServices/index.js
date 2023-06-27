const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const portParemeter = 8080
const EndPoints = require('./api/EndPoints')

var app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use("/clientes",EndPoints)

mongoose.connect(
        'mongodb+srv://cagarzon3:I8XdQBNoPNyC0o4Y@cluster0.bvnkntm.mongodb.net/?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    ).then(() => {
        app.listen(portParemeter,() => {
            console.log(`Server is running on port ${portParemeter}`)
        })
    }).catch(err => console.log("Error al conectarse a la base de datos"));