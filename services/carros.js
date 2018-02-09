// Action find
exports.find = function(req, res){
    res.render('lista_carros');
}

//action new
exports.new = function(req, res){
    res.render('novo_carro');
}

//action new
exports.edit = function(req, res){
    res.render('atualizar_carro');
}