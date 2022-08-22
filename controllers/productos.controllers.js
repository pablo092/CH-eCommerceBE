import ProductosDAO from "../daos/index.js";

export const listarProductos = (req, res) => {
  try {
    const productos = ProductosDAO.getAll();

    if (productos) return res.status(200).json(productos);
    return res.status(402).send({ error: "Productos no encontrados" });
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

export const listarProductosPorId = (req, res) => {
  try {
    const prod = ProductosDAO.getById(+req.params['id']);
    if (!prod) {
      return res.status(402).send({ error: "Producto no encontrado" });
    }
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

export const guardarProducto = (req, res) => {
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
    const prod = ProductosDAO.save(newProduct);
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

export const actualizarProducto = (req, res) => {
  try {
    const productToUpdate = ProductosDAO.getById(+req.params['id']);
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

    const prod = ProductosDAO.deleteById(+req.params['id']);
    prod = ProductosDAO.save(productToUpdate);

    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

export const eliminarProducto = (req, res) => {
  try {
    const prod = ProductosDAO.deleteById(+req.params['id']);
    if (!prod) {
      return res.status(402).send({ error: "Producto no encontrado" });
    }
    return res.status(200).json(prod);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};
