// const { ProductosApi } = require('../model/index');
// const productosApi = new ProductosApi();

const Contenedor = require("../config/dummyDB");
const productosApi = new Contenedor("productos.txt");

const listarProductosController = async (req, res) => {
  try {
    const productos = await productosApi.getAll();

    if (productos) return res.status(200).json(productos);
    return res.status(400).send({ error: "Productos no encontrados" });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const listarProductosPorIdController = async (req, res) => {
  try {
    const prod = await productosApi.getById(req.params.id);
    if (!prod) {
      return res.status(400).send({ error: "Producto no encontrado" });
    }
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const guardarProductoController = async (req, res) => {
  try {
    const { nombre, descripcion, codigo, fotoUrl, precio, stock } = req.body;
    if (!nombre || !descripcion || !codigo || !fotoUrl || !precio || !stock) {
      return res.status(403).send({ error: "Faltan campos del producto" });
    }
    const prod = await productosApi.save(req.body);
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const actualizarProductoController = async (req, res) => {
  try {
    const prod = await productosApi.updateById(req.params.id, req.body);
    if (!prod) {
      return res.status(400).send({ error: "Producto no encontrado" });
    }
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const eliminarProductoController = async (req, res) => {
  try {
    const prod = await productosApi.deleteById(req.params.id);
    if (!prod) {
      return res.status(400).send({ error: "Producto no encontrado" });
    }
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

module.exports = {
  listarProductosController,
  listarProductosPorIdController,
  guardarProductoController,
  actualizarProductoController,
  eliminarProductoController,
};
