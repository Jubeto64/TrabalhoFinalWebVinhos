var express = require('express');
const mongoose = require('mongoose');
const Vinhos = require('../models/vinho.model');
var router = express.Router();

router.post('/', async (req, res) => {
    const { vinicola, nome, paisOrigem, tipo, tipoUva, harmonizacao, rotulo } = req.body;
    let vinhoArray = {};
    vinhoArray.vinicola = vinicola;
    vinhoArray.nome = nome;
    vinhoArray.paisOrigem = paisOrigem;
    vinhoArray.tipo = tipo;
    vinhoArray.tipoUva = tipoUva;
    vinhoArray.harmonizacao = harmonizacao;
    vinhoArray.rotulo = rotulo;
    let vinhoEntry = new Vinhos(vinhoArray);
    await vinhoEntry.save();
    res.json(vinhoEntry);
});

module.exports = router;
