import mongoose from "mongoose";

const productosCollection = "productos";

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, max: 100 },
  descripcion: { type: String, required: false, max: 100 },
  codigo: { type: String, required: true, max: 100 },
  fotoUrl: { type: String, required: true, max: 1000 },
  precio: { type: Number, required: true },
  stock: { type: Number, required: true },
  timestamp: { type: Number, required: true, default: Date.now() },
});

export const Producto = mongoose.model(productosCollection, productoSchema);
