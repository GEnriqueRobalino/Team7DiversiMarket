const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ClientSchema = new Schema({
    nombre: {type: String},
    apellido: {type: String},
    cedula: {type: Number},
    edad: {type: Number},
    ciudad: {type: String}
})

module.exports = Client = mongoose.model('Client', ClientSchema)