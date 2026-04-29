const AlunoModel = require("../models/alunoModel");
const MatriculaModel = require("../models/matriculaModel");
const { parseId, mapSequelizeError } = require("../utils/http");

async function listar(req, res) {
  const alunos = await AlunoModel.listarTodos({ curso: req.query.curso });
  res.status(200).json({ total: alunos.length, alunos });
}

async function buscar(req, res) {
  const id = parseId(req.params.id);
  const aluno = await AlunoModel.buscarPorId(id);
  if (!aluno) return res.status(404).json({ erro: "Aluno nao encontrado" });
  res.status(200).json(aluno);
}

async function criar(req, res, next) {
  try {
    const novoAluno = await AlunoModel.criar(req.body);
    return res
      .status(201)
      .set("Location", "/api/alunos/" + novoAluno.id)
      .json(novoAluno);
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
    const aluno = await AlunoModel.atualizar(id, req.body);
    return res.status(200).json(aluno);
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
  await AlunoModel.remover(id);
  res.status(204).send();
}

async function matricular(req, res, next) {
  const alunoId = parseId(req.params.id);
  const disciplinaId = parseId(req.body.disciplinaId);

  try {
    const novaMatricula = await MatriculaModel.matricular(alunoId, disciplinaId);
    return res.status(201).json(novaMatricula);
  } catch (err) {
    if (err.statusCode) return res.status(err.statusCode).json({ erro: err.message });
    return next(err);
  }
}

async function listarMatriculas(req, res) {
  const alunoId = parseId(req.params.id);
  const { aluno, disciplinas } = await MatriculaModel.listarDisciplinasPorAluno(alunoId);

  return res.status(200).json({
    mensagem: "Disciplinas do aluno " + aluno.nome + " listadas com sucesso",
    total: disciplinas.length,
    disciplinas,
  });
}

module.exports = { listar, buscar, criar, atualizar, remover, matricular, listarMatriculas };
