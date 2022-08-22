import ContenedorMariaDb from "../../contenedores/ContenedorMariaDb";

class ProductosDaoMariaDb extends ContenedorMariaDb {
    constructor() {
        super('productos');
        try {
            const tableExist = await this.knex.schema.hasTable(this.table);
            if (!tableExist) {
              await this.knex.schema.createTable(this.table, (table) => {
                table.increments("id");
                table
                  .timestamp("timestamp")
                  .notNullable()
                  .defaultTo(this.knex.fn.now());
                table.string("nombre").notNullable();
                table.string("descripcion");
                table.string("codigo").notNullable();
                table.string("fotoUrl").notNullable();
                table.integer("precio").notNullable();
                table.integer("stock").notNullable();
              });
              console.log(`Table ${this.table} created!`);
              /* INSERT DE PRODUCTOS */
              const listaProductos = [
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
              this.knex(this.table)
                .insert(listaProductos)
                .then(() => console.log("Productos insertados"));
            } else {
              console.log(`Skipping ${this.table} creation...`);
            }
          } catch (error) {
            console.log(error);
            throw error;
          } finally {
            this.knex.destroy();
          }
    }
}

export default ProductosDaoMariaDb;