//  var mongoose= require('mongoose');
  var express = require('express');
  var router = express.Router();
  var modProd= require('../Sche-n-Model/modelProductos').modelProd;

  //get
  router.get('/api/productos',function(req,res){
    modProd.find(function(err, productos){
      if(err){
        return res.send('ERROR: '+ err.message);
      }
      else {
        res.json(productos);
      }
  });
});

/*findAllProduct= function(req,res){
    modProd.find(function(err, productos){
      if(err)
      return res.send('ERROR: '+ err.message);
      else res.json(productos);
    });
  };

  exports.findByID = function(req,res){
    modProd.findByID(req.param.id, function(err, producto){
      if(err)
      return res.send('ERROR: '+ err.message);
      else res.status(200).jsonp(producto);
    });
  };
  // update
  exports.updateCantidad = function(req,res){
    modProd.findByID(req.param.id, function(err, producto){
      producto.cantidad=req.body.cantidad;
  });

    modProd.save(function (err) {
      if(!err) console.log('Producto Actualizado');
      else console.log('ERROR: '+err);

    })
  };

  //DELETE
  exports.deleteProduct= function(req,res){
    modProd.findByID(req.param.id, function(err, producto){
      producto.remove(function(err){
        if(!err) console.log('Producto Eliminado');
        else console.log('ERROR: '+err);
      })
    });
  };}
  */

module.exports = router;
