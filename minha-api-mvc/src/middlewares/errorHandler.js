function errorHandler(err, req, res, next) {
  console.error("[Erro nao tratado]", err);

  const statusCode = err.statusCode || 500;
  const message = err.statusCode ? err.message : "Erro interno no servidor";

  res.status(statusCode).json({ erro: message });
}

module.exports = errorHandler;
