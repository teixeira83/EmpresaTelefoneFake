
const express = require('express');
const app = express();
const router = require('./router');
const { port } = require('./config/enviroments');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vxteldorafael', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/', router);
app.listen( port, () => {
    console.log(`Servidor rodando na porta ${port}`);
} );