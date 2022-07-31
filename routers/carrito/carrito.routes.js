const express = require("express");
const {
  guardarCarrito,
  eliminarCarrito,
  listarProductosPorIdCarrito,
  guardarProductosCarritoPorId,
  eliminarProductoCarritoPorId,
} = require("../../controllers/carrito.controllers");

const router = express.Router();

router.post("/", guardarCarrito);
router.delete("/:id", eliminarCarrito);
router.get("/:id/productos", listarProductosPorIdCarrito);
router.post("/:id/productos", guardarProductosCarritoPorId);
router.delete("/:id/productos/:id_prod", eliminarProductoCarritoPorId);

module.exports = router;
