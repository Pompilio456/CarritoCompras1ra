
var express         = require("express"),
    app             = express(),
    mongoose        = require('mongoose'),
    bodyParser      = require('body-parser'),
    methodOverride  = require("method-override"),
    port  	        = process.env.PORT || 5000;


// Conexión con la base de datos ... la base de datos se llama productos
  mongoose.connect('mongodb://localhost:27017/carritocompras', function(err,res){
  if(err) console.log('Error: conexion BD: '+ err);
  else console.log('Conexcion a la BD realizada');
});

// Configuración middlewares
    // Localización de los ficheros estaticos
    app.use('/static',express.static(__dirname + '/js'));
    // Permite cambiar el HTML con el método POST
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    // Simula DELETE y PUT
    app.use(methodOverride());





    app.use(express.static(__dirname + '/'));


    var router= express.Router();

    router.get('/', function(req,res){
    res.sendFile(__dirname + '/');

    });
    app.use(router);



    //var models = require('./Sche-n-Model/modelProductos')(app, mongoose);
    var ProCtrl = require('./Js/controlService');
    app.use('/',ProCtrl);




// Escucha en el puerto 3000 y corre el server
app.listen(port);
    console.log('APP por el puerto  '+ port);
