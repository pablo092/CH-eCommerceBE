import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb";
import { Producto } from "./models/productos/productos.js";

class ProductosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super(Producto);
    }
}

export default ProductosDaoMongoDb;