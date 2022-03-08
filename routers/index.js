const express = require('express');
const productossRoutes = require('./productos/productos.routes');
const carritoRoutes = require('./carrito/carrito.routes');

const router = express.Router();

// Routes
router.use('/productos', productossRoutes);
router.use('/carrito', carritoRoutes);

module.exports = router