const express = require('express');
const alunosRouter = require('./routes/alunoRoutes');
const disciplinasRouter = require('./routes/disciplinaRoutes');
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(express.json());

app.get('/', (__, res) => {
    res.json({
        mensagem: 'API funcionando!',
        versao: '1.0.0',
        timestamp: new Date().toISOString()
    });
});

app.use('/api/alunos', alunosRouter);
app.use('/api/disciplinas', disciplinasRouter);
app.use(errorHandler);

module.exports = app;
