const Contenedor = require("../models/Contenedor");
const carritoApi = new Contenedor("carritos.txt");

const guardarCarrito = (req, res) => {
  try {
    const { productos } = req.body;
    if (!productos) {
      return res.status(402).send({ error: "No se han mandado productos" });
    }
    const newCart = {
      timestamp: Date.now(),
      productos: productos,
    };
    const cart = carritoApi.save(newCart);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const eliminarCarrito = (req, res) => {
  try {
    const cart = carritoApi.deleteById(+req.params['id']);
    if (!cart) {
      return res.status(402).send({ error: "Carrito no encontrado" });
    }
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const listarProductosPorIdCarrito = (req, res) => {
  try {
    const cart = carritoApi.getById(+req.params['id']);
    if (!cart) {
      return res.status(402).send({ error: "Carrito no encontrado" });
    }
    return res.status(200).json(cart.productos);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const guardarProductosCarritoPorId = (req, res) => {
  try {
    const cart = carritoApi.getById(+req.params['id']);
    if (!cart) {
      return res.status(402).send({ error: "Carrito no encontrado" });
    }
    const { productos } = req.body;
    if (!productos) {
      return res.status(402).send({ error: "No se han mandado productos" });
    }

    productos.forEach(p => cart.productos.push(p));
    const cartModified = carritoApi.deleteById(+req.params['id']);
    cartModified = carritoApi.save(cart);
    return res.status(200).json(cartModified);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const eliminarProductoCarritoPorId = (req, res) => {
  try {
    const cart = carritoApi.getById(+req.params['id']);
    if (!cart) {
      return res.status(402).send({ error: "Carrito no encontrado" });
    }
    const productToDeleteIndex = cart.productos.findIndex(
      (product) => product.id === +req.params['id_prod']
    );
    if (productToDeleteIndex < 0)
      return res.status(402).send({ error: "Producto en el carrito no encontrado" });
    cart.productos.splice(productToDeleteIndex, 1);
    const cartModified = carritoApi.save(cart);
    return res.status(200).json(cartModified);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

module.exports = {
  guardarCarrito,
  eliminarCarrito,
  listarProductosPorIdCarrito,
  guardarProductosCarritoPorId,
  eliminarProductoCarritoPorId,
};
