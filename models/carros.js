var mongoose = require('mongoose');

var Carro = mongoose.Schema({
    nome_motorista: {
        type     : String,
        required : true        
    },
    licenca_placa: {
        type     : String,
        required : true        
    },
    status: {
        type     : String,
        enum     : ['DENTRO','FORA'],
        required : true,
        default  : 'DENTRO'
    },
    age: {
        type     : Number,
        required : true
    },
    date: {
        type    : Date,
        default : Date.now
    }
});

module.exports = mongoose.model('Carro', Carro);