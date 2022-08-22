import ContenedorMongoDb from "../../contenedores/ContenedorMongoDb";
import { Carrito } from "./models/carritos/carritos.js";

class CarritosDaoMongoDb extends ContenedorMongoDb {
    constructor() {
        super(Carrito);
    }
}

export default CarritosDaoMongoDb;