var express = require('express');
const connectDB = require('../db');
var router = express.Router();
var db = require("../db");

connectDB();

var novo_usuario

router.post('/register', function (req, res, next){
    let novo = { username, email, password } = req.body;
    var Usuarios = db.Mongoose.model('user', db.UserSchema, 'user');
    novo_usuario = new Usuarios(novo);
    novo_usuario.save(function (err){
      if(err){
        console.log("Error " + err.message);
        return err;
      } else{
        console.log("Usuário criado com sucesso!");
      }
    });
});

/*
router.post('/', function(req, res){
    let { vinicola, nome, paisOrigem, tipo, tipoUva, harmonizacao, rotulo } = req.body;
    let vinhoArray = {};
    vinhoArray.vinicola = vinicola;
    vinhoArray.nome = nome;
    vinhoArray.paisOrigem = paisOrigem;
    vinhoArray.tipo = tipo;
    vinhoArray.tipoUva = tipoUva;
    vinhoArray.harmonizacao = harmonizacao;
    vinhoArray.rotulo = rotulo;

    
    let vinho = new vinhoModel(vinhoArray);
    vinho.save();
    res.json(vinho);
});
*/

module.exports = router;
