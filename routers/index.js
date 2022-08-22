import { Router } from 'express';
import productosRoutes from './productos/productos.routes.js';
import carritoRoutes from './carrito/carrito.routes.js';

const router = Router();

// Routes
router.use('/productos', productosRoutes);
router.use('/carrito', carritoRoutes);

export default router;