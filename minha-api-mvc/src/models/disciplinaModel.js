const db = require("../../models");
const { createHttpError } = require("../utils/http");

async function listarTodos({ curso } = {}) {
  const where = {};
  if (curso) where.curso = curso.toUpperCase();
  return db.Disciplina.findAll({ where, order: [["id", "ASC"]] });
}

async function buscarPorId(id) {
  return db.Disciplina.findByPk(id);
}

async function criar(dados) {
  return db.Disciplina.create(dados);
}

async function atualizar(id, dados) {
  const disciplina = await db.Disciplina.findByPk(id);
  if (!disciplina) throw createHttpError("Disciplina nao encontrada", 404);
  await disciplina.update(dados);
  return disciplina;
}

async function remover(id) {
  const deleted = await db.Disciplina.destroy({ where: { id } });
  if (!deleted) throw createHttpError("Disciplina nao encontrada", 404);
}

module.exports = { listarTodos, buscarPorId, criar, atualizar, remover };
