const express = require('express');
const cors = require('cors');
const route = require('./modules/routes.js');
const error = require('./modules/global/middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());


app.get('/', (req, res) => res
.status(200)
.send('<h1>Bem-vindo ao projeto Ebytr</h1>'));

app.use('/', route);

app.use(error);

module.exports = app;
