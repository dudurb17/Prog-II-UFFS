"use strict";

module.exports = (sequelize, DataTypes) => {
  const Matricula = sequelize.define(
    "Matricula",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_aluno: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_disciplina: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "matricula",
      schema: "public",
      freezeTableName: true,
      timestamps: false,
      indexes: [
        {
          unique: true,
          fields: ["id_aluno", "id_disciplina"],
          name: "matricula_aluno_disciplina_unique",
        },
      ],
    },
  );

  Matricula.associate = function (models) {
    Matricula.belongsTo(models.Aluno, {
      foreignKey: "id_aluno",
      as: "aluno",
    });
    Matricula.belongsTo(models.Disciplina, {
      foreignKey: "id_disciplina",
      as: "disciplina",
    });
  };

  return Matricula;
};
