const express = require('express');
const app = express();

// Rotas
app.get('/', function (req, res) {
// a variavel __dirname  serve para pegar o diretório raiz
  res.sendFile(__dirname+"/html/index.html");
})

app.get('/sobre',function (req, res) {
  res.sendFile(__dirname + "/html/sobre.html");
})

app.get('/blog',function (req, res) {
  res.send('Bem vindo ao blog');
})

app.get('/ola/:name',function (req,res) {
  res.send(req.params);
})


app.listen(8081, function () {
  console.log('rodando');
});
