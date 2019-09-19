var express = require('express');

var app = express();

app.use(express.static(__dirname))
.get('*', function(req, res){
    res.sendFile('/index.html', {root:__dirname});
}).listen((3000), () => {
    console.log('Servidor localhost:3000 iniciado');
})