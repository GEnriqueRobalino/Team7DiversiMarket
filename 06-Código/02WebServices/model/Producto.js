const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductoSchema = new Schema({
    name: {type: String},
    tipo: {type: String},
    presentacion: {type: String},
    costo: {type: Number},
    precio: {type: Number},
    proveedor: {type: String},
    fechaf: {type: Date},
    fechav: {type: Date}
})

module.exports = Producto = mongoose.model('Producto', ProductoSchema)