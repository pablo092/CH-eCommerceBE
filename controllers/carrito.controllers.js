// const { CarritoApi } = require('../model/index');
// const carritoApi = new CarritoApi();

const Contenedor = require("../config/dummyDB");
const carritoApi = new Contenedor("carritos.txt");

const guardarCarritoController = async (req, res) => {
  try {
    const cart = await carritoApi.save(req.body);
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const eliminarCarritoController = async (req, res) => {
  try {
    const cart = await carritoApi.deleteById(req.params.id);
    if (!cart) {
      return res.status(400).send({ error: "Carrito no encontrado" });
    }
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const listarProductosPorIdCarritoController = async (req, res) => {
  try {
    const cart = await carritoApi.getById(req.params.id);
    if (!cart) {
      return res.status(400).send({ error: "Carrito no encontrado" });
    }
    return res.status(200).json(cart.productos);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const guardarProductosCarritoPorIdController = async (req, res) => {
  try {
    const cart = await carritoApi.getById(req.params.id);
    if (!cart) {
      return res.status(400).send({ error: "Carrito no encontrado" });
    }
    cart.productos.push(req.body);
    const cartModified = await carritoApi.updateById(req.params.id, cart);
    return res.status(200).json(cartModified);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

const eliminarProductoCarritoPorIdController = async (req, res) => {
  try {
    const cart = await carritoApi.getById(req.params.id);
    if (!cart) {
      return res.status(400).send({ error: "Carrito no encontrado" });
    }
    const productToDeleteIndex = cart.productos.findIndex(
      (product) => product.id === +req.params.id_prod
    );
    if (productToDeleteIndex < 0)
      return res
        .status(400)
        .send({ error: "Producto en el carrito no encontrado" });
    cart.productos.splice(productToDeleteIndex, 1);
    const cartModified = await carritoApi.updateById(req.params.id, cart);
    return res.status(200).json(cartModified);
  } catch (error) {
    return res.status(500).send({ error: error });
  }
};

module.exports = {
  guardarCarritoController,
  eliminarCarritoController,
  listarProductosPorIdCarritoController,
  guardarProductosCarritoPorIdController,
  eliminarProductoCarritoPorIdController,
};
