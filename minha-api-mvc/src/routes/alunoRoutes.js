const express = require('express');
const router = express.Router();
const AlunoController = require('../controllers/alunoController');
const asyncHandler = require("../middlewares/asyncHandler");

router.get('/', asyncHandler(AlunoController.listar));
router.post('/:id/matriculas', asyncHandler(AlunoController.matricular));
router.get('/:id/matriculas', asyncHandler(AlunoController.listarMatriculas));
router.get('/:id', asyncHandler(AlunoController.buscar));
router.post('/', asyncHandler(AlunoController.criar));
router.put('/:id', asyncHandler(AlunoController.atualizar));
router.delete('/:id', asyncHandler(AlunoController.remover));
module.exports = router;