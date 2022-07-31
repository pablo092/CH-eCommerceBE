const Contenedor = require("../models/Contenedor");
const productosApi = new Contenedor("productos.txt");

const listarProductos = (req, res) => {
  try {
    const productos = productosApi.getAll();

    if (productos) return res.status(200).json(productos);
    return res.status(402).send({ error: "Productos no encontrados" });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const listarProductosPorId = (req, res) => {
  try {
    const prod = productosApi.getById(+req.params['id']);
    if (!prod) {
      return res.status(402).send({ error: "Producto no encontrado" });
    }
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const guardarProducto = (req, res) => {
  try {
    const { nombre, descripcion, codigo, fotoUrl, precio, stock } = req.body;
    if (!nombre || !descripcion || !codigo || !fotoUrl || !precio || !stock) {
      return res.status(403).send({ error: "Faltan campos del producto" });
    }
    const newProduct = {
      timestamp: Date.now(),
      nombre,
      descripcion,
      codigo,
      fotoUrl,
      precio,
      stock,
    };
    const prod = productosApi.save(newProduct);
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const actualizarProducto = (req, res) => {
  try {
    const productToUpdate = productosApi.getById(+req.params['id']);
    if (!productToUpdate) {
      return res.status(402).send({ error: "Producto no encontrado" });
    }
    const { nombre, descripcion, codigo, fotoUrl, precio, stock } = req.body;

    productToUpdate.timestamp = Date.now();
    productToUpdate.id = +req.params['id'];
    productToUpdate.nombre = nombre;
    productToUpdate.descripcion = descripcion;
    productToUpdate.codigo = codigo;
    productToUpdate.fotoUrl = fotoUrl;
    productToUpdate.precio = precio;
    productToUpdate.stock = stock;

    const prod = productosApi.deleteById(+req.params['id']);
    prod = productosApi.save(productToUpdate);

    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const eliminarProducto = (req, res) => {
  try {
    const prod = productosApi.deleteById(+req.params['id']);
    if (!prod) {
      return res.status(402).send({ error: "Producto no encontrado" });
    }
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

module.exports = {
  listarProductos,
  listarProductosPorId,
  guardarProducto,
  actualizarProducto,
  eliminarProducto,
};
