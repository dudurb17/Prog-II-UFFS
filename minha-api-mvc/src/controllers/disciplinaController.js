const DisciplinaModel = require("../models/disciplinaModel");
const { parseId, mapSequelizeError } = require("../utils/http");

async function listar(req, res) {
  const disciplinas = await DisciplinaModel.listarTodos({ curso: req.query.curso });
  res.status(200).json({ total: disciplinas.length, disciplinas });
}

async function buscar(req, res) {
  const id = parseId(req.params.id);
  const disciplina = await DisciplinaModel.buscarPorId(id);
  if (!disciplina) {
    return res.status(404).json({ erro: "Disciplina nao encontrada" });
  }
  res.status(200).json(disciplina);
}

async function criar(req, res, next) {
  try {
    const novo = await DisciplinaModel.criar(req.body);
    return res.status(201).set("Location", "/api/disciplinas/" + novo.id).json(novo);
  } catch (err) {
    const mapped = mapSequelizeError(err);
    if (mapped.statusCode) {
      return res
        .status(mapped.statusCode)
        .json({ erro: mapped.message, detalhes: mapped.details });
    }
    return next(mapped);
  }
}

async function atualizar(req, res, next) {
  const id = parseId(req.params.id);
  try {
    const disciplina = await DisciplinaModel.atualizar(id, req.body);
    return res.status(200).json(disciplina);
  } catch (err) {
    const mapped = mapSequelizeError(err);
    if (mapped.statusCode) {
      return res
        .status(mapped.statusCode)
        .json({ erro: mapped.message, detalhes: mapped.details });
    }
    return next(mapped);
  }
}

async function remover(req, res) {
  const id = parseId(req.params.id);
  await DisciplinaModel.remover(id);
  res.status(204).send();
}

module.exports = { listar, buscar, criar, atualizar, remover };
