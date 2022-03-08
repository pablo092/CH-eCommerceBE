const carts = [];

class CarritoApi {
  static lastCartId = carts.length > 0 ? carts[carts.length - 1].id : 0;

  constructor() {
    this.list = carts;
  }

  getAll() {
    return this.list;
  }

  getById(cartId) {
    return this.list.find((cart) => cart.id === +cartId);
  }

  save(products) {
    if (!products) {
      return null;
    }
    CarritoApi.lastCartId++;
    const newCart = {
      id: CarritoApi.lastCartId,
      timestamp: Date.now(),
      productos: products,
    };
    this.list.push(newCart);
    return newCart;
  }

  deleteById(cartId) {
    const cartIndex = this.list.findIndex(
      (cart) => cart.id === +cartId
    );
    if (cartIndex < 0) return null;
    let cartToDelete = this.list[cartIndex];
    this.list.splice(cartIndex, 1);
    return cartToDelete;
  }

  saveProductsById(cartId, products) {
    const cartIndex = this.list.findIndex(
      (cart) => cart.id === +cartId
    );
    if (cartIndex < 0) return null;
    let cartToUpdate = this.list[cartIndex];
    products.forEach(product => cartToUpdate.productos.pus(product));
    return cartToUpdate;
  }

  deleteProductByIdProdByCartId(cartId, productId) {
    const cartIndex = this.list.findIndex(
      (cart) => cart.id === +cartId
    );
    if (cartIndex < 0) return null;
    let cartToDelete = this.list[cartIndex];
    const productToDeleteIndex = cartToDelete.productos.findIndex(
      (product) => product.id === +productId
    );
    if (productToDeleteIndex < 0) return null;
    cartToDelete.productos.splice(productToDeleteIndex, 1);
    return cartToDelete;
  }
}

module.exports = CarritoApi;
