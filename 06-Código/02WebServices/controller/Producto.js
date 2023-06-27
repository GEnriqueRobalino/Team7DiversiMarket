const Client = require('../model/Client');
const Producto = require('../model/Producto');
const moment = require('moment');

const createProducto = (req, res) => {
    let producto = new Producto({
        name: req.body.name,
        tipo: req.body.tipo,
        presentacion: req.body.presentacion,
        costo: req.body.costo,
        precio: req.body.precio,
        proveedor: req.body.proveedor,
        fechaf: req.body.fechaf,
        fechav: req.body.fechav
    });

    producto.save()
        .then(prod => res.status(200).json(prod))
        .catch(err => res.status(500).json(err.message));
};

const getProducto = (req, res) => {
    Producto.find()
        .then(producto => res.status(200).json(producto))
        .catch(err => res.status(500).send(err.message));
};

const deleteProducto = (req, res) => {
    Producto.findOneAndDelete({ name: req.body.name })
        .then(pro => res.status(200).send(pro))
        .catch(err => res.status(501).send(err.message));
};

const updateProducto = (req, res) => {
    Producto.findOneAndUpdate(
        { name: req.body.name },
        { fechav: req.body.fechav},
        { new: true }
    )
        .then(prod => res.status(200).send(prod))
        .catch(err => res.status(500).send(err.message));
};

const expiration = (req, res) => {
    const today =moment();
    Producto.findOne({name: req.body.name})
    .then(producto=>{
      const daysToExpiration = moment(producto.fechav)
      if(today.day() == daysToExpiration.day() && today.month() ==daysToExpiration.month()){
        res.status(200).send('El producto ha expirado')
      }else{
        res.status(200).send('El producto no ha expirado')
      }
    })
    .catch(error=>res.status(500).send(error.message))
};

const calculateDaysToExpiration = (req, res) => {
  const today =moment();
  Producto.findOne({name: req.body.name})
  .then(producto=>{
    const daysToExpiration = moment(producto.fechav).year(today.year());
    const daysLeft =daysToExpiration.diff(today,'days');
    res.status(500).send(`Faltan ${daysLeft} para la fecha de vencimiento.`)
  })
  .catch(error=>res.status(500).send(error.message))
};

const getProfit = (req, res) => {
  Producto.findOne({name: req.body.name})
      .then(producto =>{
        const profit=(producto.precio - producto.costo);
        res.status(200).send(`La utilidad del producto ${producto.name} es: ${profit} `);
      } 
      )
      .catch(err => res.status(500).send(err.message));
};

module.exports = { createProducto, deleteProducto, getProducto, updateProducto, calculateDaysToExpiration, expiration, getProfit };