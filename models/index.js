var mongoose = require('mongoose');

// mongoose connect
mongoose.connect('mongodb://localhost/parking');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open',function(){
    console.log('A conexão com o mongodb foi aberta!');
});


return db;
