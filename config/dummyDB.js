const fs = require("fs");

function jsonReader(filePath, cb) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (err, fileData) => {
      if (err) {
        resolve(cb && cb(err));
      }
      if (fileData.length == 0) {
        resolve(cb && cb(null, []));
      } else {
        try {
          const object = JSON.parse(fileData);
          resolve(cb && cb(null, object));
        } catch (err) {
          reject(cb && cb(err));
        }
      }
    });
  });
}

async function eliminarContenido(file) {
  try {
    await fs.promises.appendFile(file, "[]");
    console.log("Se elimino todo el contenido del archivo");
  } catch (error) {
    console.log("No se pudo eliminar todo el contenido!", error);
  }
}

class Contenedor {
  constructor(nombreArchivo) {
    this.nombreArchivo = nombreArchivo;

    fs.open(`${nombreArchivo}`, "w", function (err, file) {
      if (err) throw err;
      console.log(`${nombreArchivo} creado!`);
    });
  }

  // Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
  async save(object) {
    return await jsonReader(this.nombreArchivo, (err, objects) => {
      if (err) {
        return;
      }
      if (!object.id) {
        if (objects.length > 0) {
          object.id =
            Math.max.apply(
              Math,
              objects.map(function (obj) {
                return obj.id;
              })
            ) + 1;
        } else {
          object.id = 1;
        }
      }

      (object.timestamp = Date.now()), objects.push(object);

      fs.writeFile(
        `${this.nombreArchivo}`,
        JSON.stringify(objects),
        function (err) {
          if (err) console.log(err);
          console.log(
            `Se guardo correctamente el objeto! El id generado es: ${object.id}`
          );
        }
      );
    });
  }

  // Recibe un id y devuelve el objeto con ese id, o null si no está.
  async getById(id) {
    return await jsonReader(this.nombreArchivo, (err, objects) => {
      if (err) {
        return err;
      }
      const found = objects.find((element) => element.id === id);
      return found ? found : null;
    });
  }

  // Devuelve un array con los objetos presentes en el archivo.
  async getAll() {
    return await jsonReader(this.nombreArchivo, (err, objects) => {
      if (err) {
        return;
      }
      return objects;
    });
  }

  // Elimina del archivo el objeto con el id buscado.
  async deleteById(id) {
    return await jsonReader(this.nombreArchivo, (err, objects) => {
      if (err) {
        console.log(err);
        return;
      }
      const filtered = objects.filter((element) => element.id !== id);
      fs.promises
        .appendFile(
          `${this.nombreArchivo}`,
          JSON.stringify(filtered),
          function (err) {
            if (err) throw err;
            console.log(`Se elimino correctamente el objeto con id: ${id}`);
          }
        )
        .then(() => {
          return;
        });
    });
  }

  // Elimina todos los objetos presentes en el archivo.
  async deleteAll() {
    await eliminarContenido(this.nombreArchivo);
  }

  // Recibe un id y devuelve el objeto con ese id, o null si no está.
  async updateById(id, object) {
    return await jsonReader(this.nombreArchivo, (err, objects) => {
      if (err) {
        return err;
      }
      const found = objects.find((element) => element.id === id);
      this.deleteById(id);
      if (!object.productos) {
        found.nombre = object.nombre;
        found.descripcion = object.descripcion;
        found.codigo = object.codigo;
        found.fotoUrl = object.fotoUrl;
        found.precio = object.precio;
        found.stock = object.stock;
      } else {
        found.productos = object.productos;
      }
      this.save(found);
      return found ? found : null;
    });
  }
}

module.exports = Contenedor;
