const ClientController = require('../controller/Clients');
const ProductoController = require('../controller/Producto');
const express = require('express');
const router = express.Router();

// Rutas para Clients
router.post('/add', ClientController.createClient);
router.get('/clients', ClientController.getClients);
router.put('/updateClient', ClientController.updateClient);
router.delete('/deleteClient', ClientController.deleteClient);
router.post('/clientsforCity', ClientController.getClientsforCity);

// Rutas para Productos
router.post('/addProducto', ProductoController.createProducto);
router.get('/productos', ProductoController.getProductos);
router.put('/actualizarProducto', ProductoController.updateProducto);
router.delete('/deleteProducto', ProductoController.deleteProducto);
router.post('/productos/daysToExpiration', ProductoController.calculateDaysToExpiration);
router.post('/productos/expiration', ProductoController.expiration);
router.post('/productos/profit', ProductoController.getProfit);
module.exports = router;