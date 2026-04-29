const db = require("../../models");
const { createHttpError } = require("../utils/http");

async function listarTodos({ curso } = {}) {
  const where = {};
  if (curso) where.curso = curso.toUpperCase();
  return db.Aluno.findAll({ where, order: [["id", "ASC"]] });
}

async function buscarPorId(id) {
  return db.Aluno.findByPk(id);
}

async function criar(dados) {
  return db.Aluno.create(dados);
}

async function atualizar(id, dados) {
  const aluno = await db.Aluno.findByPk(id);
  if (!aluno) throw createHttpError("Aluno nao encontrado", 404);
  await aluno.update(dados);
  return aluno;
}

async function remover(id) {
  const deleted = await db.Aluno.destroy({ where: { id } });
  if (!deleted) throw createHttpError("Aluno nao encontrado", 404);
}

module.exports = { listarTodos, buscarPorId, criar, atualizar, remover };
