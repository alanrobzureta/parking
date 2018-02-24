var Carros = require('./../models/carros');

// Action find
exports.find = function(req, res){
    Carros.find({},function(err, carros){
        if(err){
            return;
        }
        
        res.render('lista_carros',{
            carros : carros
        });
    })    
}

//action new
exports.new = function(req, res){
    res.render('novo_carro');
}

//action create
exports.create = function(req, res){
    Carros.create(req.body,function(err, carros){
        if(err){
            return;
        }
        res.redirect('/carros');
    });
}

//action new
exports.edit = function(req, res){
    Carros.findById(req.params.id,function(err,carros){
        if(err){
            return;
        }
        res.render('atualizar_carro',{
           carros: carros 
        });
    });
}

//action update
exports.update = function(req, res){
    Carros.update({
        _id: req.params.id        
    }, req.body, function(err, carros){
        if(err){
            return; 
        }
        res.redirect('/carros');
    });
}

// action remove
exports.remove = function(req, res){
    Carros.remove({
        _id: req.params.id
    },function(err){
        if(err){
            return;
        }
        res.redirect('/carros');
    });
}