import ContenedorMemoria from "../../contenedores/ContenedorMemoria";

class ProductosDaoMem extends ContenedorMemoria {
    constructor() {
        super();
        this.list = [
            {
              nombre: "Escuadra",
              descripcion: "Una buena escuadra",
              codigo: "cod-1234",
              fotoUrl:
                "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
              precio: 123.45,
              stock: 10,
            },
            {
              nombre: "Calculadora",
              descripcion: "Una buena calculadora",
              codigo: "cod-4567",
              fotoUrl:
                "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
              precio: 234.56,
              stock: 12,
            },
            {
              nombre: "Globo Terráqueo",
              descripcion: "Un buen globo terráqueo",
              codigo: "cod-7894",
              fotoUrl:
                "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
              precio: 345.67,
              stock: 8,
            },
          ];
          console.log(this.list);
    }

}

export default ProductosDaoMem;