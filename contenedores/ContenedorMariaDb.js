const dbconfig = require("./DB/config");
const knex = require("knex")(dbconfig.mariaDB);

class ContenedorMariaDb {
  constructor(table) {
    this.knex = knex;
    this.table = table;
  }

  // Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  async save(object) {
    await this.knex(this.table)
      .insert(object)
      .then(() => console.log(`Object inserted!`))
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  // Recibe un id y devuelve el objeto con ese id, o null si no está.
  async getById(id) {
    let object;
    await this.knex
      .from(this.table)
      .select("*")
      .where("id", "==", id)
      .then((row) => {
        object = JSON.parse(JSON.stringify(row));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    return object;
  }

  // Devuelve un array con los objetos presentes en el archivo.
  async getAll() {
    let objects = [];
    await this.knex
      .from(this.table)
      .select("*")
      .then((rows) => {
        objects = Object.values(JSON.parse(JSON.stringify(rows)));
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
    return objects;
  }

  // Elimina del archivo el objeto con el id buscado.
  async updateById(id, object) {
    await this.knex
      .from(this.table)
      .where("id", "==", id)
      .update(object)
      .then(() => console.log(`Object updated!`))
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  // Elimina del archivo el objeto con el id buscado.
  async deleteById(id) {
    await this.knex
      .from(this.table)
      .where("id", "==", id)
      .del()
      .then(() => console.log(`Object deleted!`))
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  // Elimina todos los objetos presentes en el archivo.
  async deleteAll() {
    await this.knex
      .from(this.table)
      .del()
      .then(() => console.log(`All objects were deleted!`))
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }
}

export default ContenedorMariaDb;
