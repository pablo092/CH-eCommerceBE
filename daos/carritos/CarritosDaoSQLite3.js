import ContenedorSQLite3 from "../../contenedores/ContenedorSQLite3";

class CarritosDaoSQLite3 extends ContenedorSQLite3 {
    constructor() {
        super('carritos');
        try {
            const tableExist = await this.knex.schema.hasTable(this.table);
            if (!tableExist) {
              await this.knex.schema.createTable(this.table, (table) => {
                table.increments("id");
                table
                  .timestamp("timestamp")
                  .notNullable()
                  .defaultTo(this.knex.fn.now());
                table.string("productos");
              });
              console.log(`Table ${this.table} created!`);
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

export default CarritosDaoSQLite3;