"use strict";

module.exports = (sequelize, DataTypes) => {
  const Aluno = sequelize.define(
    "Aluno",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
        validate: {
          notEmpty: { msg: "O nome nao pode ser vazio" },
          len: { args: [2, 100], msg: "Nome deve ter entre 2 e 100 caracteres" },
        },
      },
      matricula: {
        type: DataTypes.STRING(7),
        allowNull: false,
        unique: { msg: "Esta matricula ja esta cadastrada" },
        validate: {
          is: { args: /^\d{7}$/, msg: "Matricula deve ter exatamente 7 digitos" },
        },
      },
      curso: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "aluno",
      schema: "public",
      freezeTableName: true,
      timestamps: false,
    },
  );

  Aluno.associate = function (models) {
    Aluno.belongsToMany(models.Disciplina, {
      through: models.Matricula,
      foreignKey: "id_aluno",
      otherKey: "id_disciplina",
      as: "disciplinas",
    });
    Aluno.hasMany(models.Matricula, {
      foreignKey: "id_aluno",
      as: "matriculas",
    });
  };

  return Aluno;
};
