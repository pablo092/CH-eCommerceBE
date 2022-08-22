/*Imports dinamicos */
const productos = [
  "ProductosDaoArchivo",
  "ProductosDaoFirebase",
  "ProductosDaoMariaDb",
  "ProductosDaoMem",
  "ProductosDaoMongoDb",
  "ProductosDaoSQLite3",
];
let prod;
productos.forEach((filename) => {
  if (filename == 'ProductosDaoMem') {
    prod = import(`./productos/${filename}.js`);
  }
});

const carritos = [
  "CarritosDaoArchivo",
  "CarritosDaoFirebase",
  "CarritosDaoMariaDb",
  "CarritosDaoMem",
  "CarritosDaoMongoDb",
  "CarritosDaoSQLite3",
];
let carr;
carritos.forEach((filename) => {
    if (filename == 'CarritosDaoMem') {
      carr = import(`./carritos/${filename}.js`);
    }
});

let { ProductosDao } = prod;
let { CarritosDao } = carr;

export default {ProductosDao, CarritosDao};