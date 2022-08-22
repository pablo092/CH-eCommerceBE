import mongoose from "mongoose";

const carritosCollection = "carritos";

const carritoSchema = new mongoose.Schema({
  timestamp: { type: Number, required: true, default: Date.now() },
  productos: { type: Array, default: [] },
});

export const Carrito = mongoose.model(carritosCollection, carritoSchema);
