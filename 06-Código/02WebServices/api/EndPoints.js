const ClientController = require('../controller/Clients');
const ProductoController = require('../controller/Producto');
const express = require('express');
const router = express.Router();

// Rutas para Clients
router.post('/add', ClientController.createClient);
router.get('/clients', ClientController.getClients);
router.put('/updateClient', ClientController.updateClient);
router.delete('/deleteClient', ClientController.deleteClient);
router.get('/clientsforCity', ClientController.getClientsforCity);
// Rutas para Productos
router.post('/addProducto', ProductoController.createProducto);
router.get('/productos', ProductoController.getProducto);
router.put('/actualizarProducto', ProductoController.updateProducto);
router.delete('/deleteProducto', ProductoController.deleteProducto);
router.get('/productos/daysToExpiration', ProductoController.calculateDaysToExpiration);
router.get('/productos/expiration', ProductoController.expiration);
router.get('/productos/profit', ProductoController.getProfit);
module.exports = router;