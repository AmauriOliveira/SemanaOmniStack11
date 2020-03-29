const express = require('express');

const app = express();//
app.use(express.json());//aqui avisa que as requisicao do resquest body sera em json
/*
-----metodo http-----
get - buscar\listar uma informacao no backEnd
post - cria uma informacao no backEnd
put - altera uma informacao no backEnd
delete - apaga uma infomacao no backEnd
*/

/*
-----tipo de parametros-----
query params - envia parametro nomeado pela rota  exemplo "?id=1&nome=amauri" geralmente usado em filtro e paginacao
route params - parametro usado para identificar recurso/rota
request body - corpo da requesição, utilizado pra criar ou alterar recursos
*/
//app.get('/user', (request, response) => {//passa uma função com paramentro  que requer 2 parametro(request, response) =>
// app.get('/user/:id', (request, response) => {//exemplo /user/1 ///route
app.post('/user', (request, response) => {//request body

    //const params = request.query; //pega a query da request e grava na const params
    //const params = request.params; //pega o params da request e grava na const params
    const params = request.body;// pega a bady da request e grava na const params

    console.log(params);//mostra a const no console..

    return response.json({
        name: 'Amauri Oliveira',
        age: 33,
        sex: 'M',
        phone: '+5516991880766'
    });
    //return response.send('A<br>B');//aqui tem a resposta
});//define rota da home

app.listen(3333);//escuta na porta 3333
