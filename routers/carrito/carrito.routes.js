import express from "express";
import {
  guardarCarrito,
  eliminarCarrito,
  listarProductosPorIdCarrito,
  guardarProductosCarritoPorId,
  eliminarProductoCarritoPorId,
} from "../../controllers/carrito.controllers";

const router = express.Router();

router.post("/", guardarCarrito);
router.delete("/:id", eliminarCarrito);
router.get("/:id/productos", listarProductosPorIdCarrito);
router.post("/:id/productos", guardarProductosCarritoPorId);
router.delete("/:id/productos/:id_prod", eliminarProductoCarritoPorId);

export default router;
