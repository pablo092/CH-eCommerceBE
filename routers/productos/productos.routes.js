import express from "express";
import isAdmin from "../../middleware/admin/index.js";
import {
  listarProductos,
  listarProductosPorId,
  guardarProducto,
  actualizarProducto,
  eliminarProducto,
} from "../../controllers/productos.controllers.js";

const router = express.Router();

router.get("/", listarProductos);
router.get("/:id", listarProductosPorId);
// Solo admin
router.post("/", isAdmin, guardarProducto);
router.put("/:id", isAdmin, actualizarProducto);
router.delete("/:id", isAdmin, eliminarProducto);

export default router;
