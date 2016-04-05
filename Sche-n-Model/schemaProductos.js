'use strict';
var mongoose= require('mongoose');
var Schema = mongoose.Schema;
// se crea el squema de la base de datos
var schemas = {
  schemaProductos: new Schema({
    codigo    :  {type: String},
    imagen    :  {type: String},
    nombre    :  {type: String},
    cantidad  :  {type: Number},
    precio    :  {type: Number}
})
};


module.exports= schemas;
