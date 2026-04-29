const db = require("../../models");
const { createHttpError } = require("../utils/http");

async function matricular(alunoId, disciplinaId) {
  return db.sequelize.transaction(async (transaction) => {
    const aluno = await db.Aluno.findByPk(alunoId, { transaction });
    if (!aluno) throw createHttpError("Aluno nao encontrado", 404);

    const disciplina = await db.Disciplina.findByPk(disciplinaId, { transaction });
    if (!disciplina) throw createHttpError("Disciplina nao encontrada", 404);

    if (disciplina.vagas <= 0) {
      throw createHttpError("Vagas esgotadas para esta disciplina", 409);
    }

    const jaMatriculado = await db.Matricula.findOne({
      where: { id_aluno: alunoId, id_disciplina: disciplinaId },
      transaction,
    });
    if (jaMatriculado) {
      throw createHttpError("Aluno ja matriculado nesta disciplina", 409);
    }

    await disciplina.update({ vagas: disciplina.vagas - 1 }, { transaction });
    return db.Matricula.create({ id_aluno: alunoId, id_disciplina: disciplinaId }, { transaction });
  });
}

async function listarDisciplinasPorAluno(alunoId) {
  const aluno = await db.Aluno.findByPk(alunoId, {
    include: [{ model: db.Disciplina, as: "disciplinas", through: { attributes: [] } }],
  });
  if (!aluno) throw createHttpError("Aluno nao encontrado", 404);
  return { aluno, disciplinas: aluno.disciplinas };
}

module.exports = { matricular, listarDisciplinasPorAluno };
