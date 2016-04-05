'use strict';

var mongoose= require('mongoose');
var schemaProductos= require('./schemaProductos');

var models = {
  modelProd: mongoose.model('productos', schemaProductos)
};
module.exports = models;
