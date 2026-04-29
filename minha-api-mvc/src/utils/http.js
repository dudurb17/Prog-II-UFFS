function createHttpError(message, statusCode, details) {
  const err = new Error(message);
  err.statusCode = statusCode;
  if (details) err.details = details;
  return err;
}

function parseId(value) {
  const id = parseInt(value, 10);
  if (Number.isNaN(id)) throw createHttpError("ID invalido", 400);
  return id;
}

function mapSequelizeError(err) {
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    const statusCode = err.name === "SequelizeUniqueConstraintError" ? 409 : 400;
    const details = err.errors?.map((e) => ({ campo: e.path, mensagem: e.message }));
    return createHttpError("Dados invalidos", statusCode, details);
  }
  return err;
}

module.exports = { createHttpError, parseId, mapSequelizeError };
