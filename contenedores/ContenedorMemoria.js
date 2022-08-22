class ContenedorMemoria {
  static idCount = 0;

  constructor() {
    this.list = [];
  }

  getAll() {
    return [...this.list];
  }

  getById(id) {
    return (
      this.list.find((element) => element.id === +id) || {
        error: `Elemento con id ${id} no encontrado!`,
      }
    );
  }

  save(element) {
    const newElement = {
      ...element,
      id: ++ContenedorMemoria.idCount,
      timestamp: Date.now(),
    };
    this.list.push(newElement);
    return newElement;
  }

  updateById(id, element) {
    const elementIndex = this.list.findIndex((elem) => elem.id === +id);
    if (elementIndex < 0)
      return { error: `Elemento con id ${id} no encontrado!` };
    this.list[elementIndex] = { id: +id, timestamp: Date.now(), ...element };
    return this.list[elementIndex];
  }

  deleteById(id) {
    const elementIndex = this.list.findIndex((element) => element.id === +id);
    if (elementIndex < 0)
      return { error: `Elemento con id ${id} no encontrado!` };
    return this.list.splice(elementIndex, 1);
  }

  // Elimina todos los objetos presentes en el archivo.
  deleteAll() {
    this.list = [];
    console.log("Se elimino todo el contenido");
  }
}

export default ContenedorMemoria;
