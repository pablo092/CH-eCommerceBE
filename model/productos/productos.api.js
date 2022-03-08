const products = [];

class ProductosApi {
  static lastProductId = products.length > 0 ? products[products.length - 1].id : 0;

  constructor() {
    this.list = products;
  }

  getAll() {
    return this.list;
  }

  getById(productId) {
    return this.list.find((product) => product.id === +productId);
  }

  save(product) {
    const { nombre, descripcion, codigo, fotoUrl, precio, stock } = product;
    if (!nombre || !descripcion || !codigo || !fotoUrl || !precio || !stock) {
      return null;
    }
    ProductosApi.lastProductId++;
    const newProduct = {
      id: ProductosApi.lastProductId,
      timestamp: Date.now(),
      nombre,
      descripcion,
      codigo,
      fotoUrl,
      precio,
      stock,
    };
    this.list.push(newProduct);
    return newProduct;
  }

  updateById(productId, product) {
    const productIndex = this.list.findIndex(
      (producto) => producto.id === +productId
    );
    if (productIndex < 0) return null;
    const { nombre, descripcion, codigo, fotoUrl, precio, stock } = product;
    let productToUpdate = this.list[productIndex];
    productToUpdate.timestamp = Date.now();
    productToUpdate.nombre = nombre;
    productToUpdate.descripcion = descripcion;
    productToUpdate.codigo = codigo;
    productToUpdate.fotoUrl = fotoUrl;
    productToUpdate.precio = precio;
    productToUpdate.stock = stock;
    return productToUpdate;
  }

  deleteById(productId) {
    const productIndex = this.list.findIndex(
      (producto) => producto.id === +productId
    );
    if (productIndex < 0) return null;
    let productToDelete = this.list[productIndex];
    this.list.splice(productIndex, 1);
    return productToDelete;
  }
}

module.exports = ProductosApi;
