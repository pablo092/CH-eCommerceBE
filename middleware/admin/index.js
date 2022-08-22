export default(req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token != undefined && !token) return res.status(400).send({ error: -1, descripcion: 'ruta no autorizada(Token no provided)' });

  return next();
};
