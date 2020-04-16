const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require("./models/Post");


//config
  //Template Engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
  //Body Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());
  

//Rotas

//Rota de listagem de posts
app.get('/', function(req,res){
  Post.findAll({order:[['id','DESC']]}).then(function (posts) {
    res.render('home',{posts: posts});
  });
});

//Rota de cadastro de posts
app.get('/cad', function(req,res){
  req.body.conteudo
  res.render('formulario');
});

//Rota que adiciona o post no banco
app.post('/add', function(req, res){
  Post.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo
  }).then(function () {
    res.redirect('/')
  }).catch(function(erro){
    res.send('Erro ao criar o post: '+erro)
  })
})

//Rota para deletar post
app.get('/deletar/:id',function (req, res) {
  Post.destroy({where:{'id': req.params.id}}).then(function () {
    res.render('deletado')
  }).catch(function (erro) {
    res.send('Erro ao deletar a postagem')
  })
})

app.listen(8081, function () {
  console.log('Servidor rodando na URL: http://localhost:8081');
});
