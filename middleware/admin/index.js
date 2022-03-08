module.exports = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (token != undefined && !token) return res.status(400).send({ error: 'Token no provided' });

  return next();
};
