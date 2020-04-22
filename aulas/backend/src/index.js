const express = require('express');
const cors = require('cors');
const route = require('./routes');
const { errors } = require('celebrate');

const app = express();//

app.use(cors());
app.use(express.json());//aqui avisa que as requisicao do resquest body sera em json
app.use(route);
app.use(errors());

app.listen(3333);//escuta na porta 3333