import express, { json } from "express";
import apiRoutes from './routers/index.js';

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(json());

app.use('/api', apiRoutes);

app.get('*', function (req, res) {
  res.status(404).send({ error: -2, descripcion: 'ruta no implementada' });
})

const connectedServer = app.listen(PORT, async () => {
  console.log(`Server is up and running on port: ${PORT}`);
});

connectedServer.on("error", (error) => {
  console.log('Error: ', error.message);
});
