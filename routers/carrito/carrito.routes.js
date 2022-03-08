const express = require("express");
const {
  guardarCarritoController,
  eliminarCarritoController,
  listarProductosPorIdCarritoController,
  guardarProductosCarritoPorIdController,
  eliminarProductoCarritoPorIdController
} = require("../../controllers/carrito.controllers");

const router = express.Router();

router.post("/", guardarCarritoController);

router.delete("/:id", eliminarCarritoController);

router.get("/:id/productos", listarProductosPorIdCarritoController);

router.post("/:id/productos", guardarProductosCarritoPorIdController);

router.delete("/:id/productos/:id_prod", eliminarProductoCarritoPorIdController);


module.exports = router;
