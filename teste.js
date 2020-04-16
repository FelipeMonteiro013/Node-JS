// instanciando o sequelize
const Sequelize = require('sequelize');

//passando as indormações do banco utilizado
const sequelize = new Sequelize('sistemadecadastro','root','bcd127',{
    host: "localhost",
    dialect: "mysql"
});

// testando conexão
// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!");    
// }).catch(function(erro) {
//     console.log("Falha ao se conectar: " + erro);    
// })

//Criando Models ou seja criando tabelas no banco de dados
const Postagem = sequelize.define('postagens',{
    titulo: {
        type: Sequelize.STRING
    },
    conteudo:{
        type: Sequelize.STRING
    }
}); 

const Usuario = sequelize.define("usuarios",{
    nome:{
        type: Sequelize.STRING
    },
    sobrenome:{
        type: Sequelize.STRING
    },
    idade:{
        type: Sequelize.INTEGER
    },
    email:{
        type: Sequelize.STRING
    }
})

//sincronizando o model com o mysql, o parametro force é para forçar a criação
// Postagem.sync({force:true})
// Usuario.sync({force:true});

//Inserindo itens na tabela

// Postagem.create({
//     titulo: "Titulo 1",
//     conteudo: "Conteúdo 1"
// });

// Usuario.create({
//    nome: "Felipe",
//    sobrenome: "Monteiro",
//    idade: 20,
//    email: "felipe@email.com"
// })