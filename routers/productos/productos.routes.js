const express = require("express");
const isAdmin = require("../../middleware/admin/index");
const {
  listarProductos,
  listarProductosPorId,
  guardarProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../../controllers/productos.controllers");

const router = express.Router();

router.get("/", listarProductos);
router.get("/:id", listarProductosPorId);
// Solo admin
router.post("/", isAdmin, guardarProducto);
router.put("/:id", isAdmin, actualizarProducto);
router.delete("/:id", isAdmin, eliminarProducto);

module.exports = router;
