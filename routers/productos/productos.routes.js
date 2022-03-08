const express = require("express");
const isAdmin = require('../../middleware/admin/index');
const {
  listarProductosController,
  listarProductosPorIdController,
  guardarProductoController,
  actualizarProductoController,
  eliminarProductoController,
} = require("../../controllers/productos.controllers");

const router = express.Router();

router.get("/", listarProductosController);

router.get("/:id", listarProductosPorIdController);

// Solo admin

router.post("/", isAdmin, guardarProductoController);

router.put("/:id", isAdmin, actualizarProductoController);

router.delete("/:id", isAdmin, eliminarProductoController);

module.exports = router;
