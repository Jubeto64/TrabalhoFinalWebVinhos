var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var db = require('./../db');

db.connectDB();

router.post('/login', function(req, res, next) {
    var filtro = {
        Usuario: req.body.username,
        Senha: req.body.password
    }
    var Usuarios = db.Mongoose.model('user', db.UserSchema, 'user');
    Usuarios.find(filtro).lean().exec(function(e, docs) {
        if (!e && docs.length > 0) {
            var token = jwt.sign({ data: docs }, 'secret');
            res.send({ status: 1, data: docs, token: token });
        } else {
            console.log("Erro ao fazer login!");
            res.send({ status: 0, data: e });
        }
    })
});

router.post('/registrar', function(req, res, next) {
    var novo = {
        Usuario: req.body.username,
        Email: req.body.email,
        Senha: req.body.password
    }
    var Usuarios = db.Mongoose.model('user', db.UserSchema, 'user');
    var novo_usuario = new Usuarios(novo);
    novo_usuario.save(function(err) {
        if (err) {
            console.log("Error " + err.message);
            res.send({ status: 0, data: err });
        } else {
            Usuarios.find(novo).lean().exec(function(e, docs) {
                if (!e) {
                    var token = jwt.sign({ data: docs }, 'secret');
                    res.send({ status: 1, data: docs, token: token });
                }
            })
        }
    });
});

router.get('/lista_vinhos', function(req, res) {
    var Vinhos = db.Mongoose.model('vinho', db.VinhoSchema, 'vinho');
    Vinhos.find().lean().exec(function(e, docs) {
        if (!e) {
            res.send({ status: 1, data: docs[0] });
        } else {
            console.log("Erro ao acessar o banco!");
            res.send({ status: 0, data: e });
        }
    })
})

router.post('/adiciona_vinho', function(req, res) {
    var novo = {
        Vinicola: req.body.vineyard,
        Nome: req.body.name,
        Preco: req.body.price,
        PaisOrigem: req.body.origin,
        Tipo: req.body.type,
        TipoUva: req.body.grapeType,
        Harmonizacao: req.body.harmonization,
        Rotulo: req.body.stamp
    }
    var Vinhos = db.Mongoose.model('vinho', db.VinhoSchema, 'vinho');
    var novo_vinho = new Vinhos(novo);
    novo_vinho.save(function(err) {
        if (err) {
            console.log("Error " + err.message);
            return err;
        } else {
            console.log("Vinho adicionado com sucesso!");
            res.json(novo_vinho)
        }
    })
});



module.exports = router;