const express = require("express");
const apiRoutes = require('./routers/index');

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());

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
