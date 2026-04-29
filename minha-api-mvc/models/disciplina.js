"use strict";

module.exports = (sequelize, DataTypes) => {
  const Disciplina = sequelize.define(
    "Disciplina",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      codigo: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: { msg: "Codigo ja cadastrado" },
      },
      curso: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      vagas: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: { args: [0], msg: "Vagas nao pode ser negativo" },
        },
      },
    },
    {
      tableName: "disciplina",
      schema: "public",
      freezeTableName: true,
      timestamps: false,
    },
  );

  Disciplina.associate = function (models) {
    Disciplina.belongsToMany(models.Aluno, {
      through: models.Matricula,
      foreignKey: "id_disciplina",
      otherKey: "id_aluno",
      as: "alunos",
    });
    Disciplina.hasMany(models.Matricula, {
      foreignKey: "id_disciplina",
      as: "matriculas",
    });
  };

  return Disciplina;
};
