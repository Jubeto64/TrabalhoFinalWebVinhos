const mongoose = require('mongoose');

const vinhoSchema = new mongoose.Schema({
    vinicola: String,
    nome: String,
    paisOrigem: String,
    tipo: String,
    tipoUva: String,
    harmonizacao: String,
    rotulo: String
});

const vinhoModel = mongoose.model("vinhoModel", vinhoSchema);

module.exports = vinhoModel;