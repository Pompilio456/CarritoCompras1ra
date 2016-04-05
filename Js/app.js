//modulo angular con nombre app se llama el modulo ng-shop
var app=angular.module('app', ['ng-Shop']);

//controlador con nombre namesCtrl
app.controller('namesCtrl', function($scope,$shop,$http) {

//funcion add recibe un producto
  $scope.add = function(productoParametro)
{
// crea un objeto producto diferente al qu recibe
  var product = {};
  //copia el id nombre y precio y la el precio total por productos
  product.codigo  = productoParametro.codigo;
  product.nombre = productoParametro.nombre;
  product.qty = parseInt(productoParametro.total || 1,10);
  product.precio = productoParametro.precio;

  // envia el producto creado a la funcion add de carrito.js
  $shop.add(product);
}
//funcion remove recibe el id de cada producto
$scope.remove = function(id)
{
   //se llama la funcion remove de carrito.js
   var remover= $shop.remove(id);
   //si la funcion retorna true
  if(remover)
  {
    // se envia una alerta que el producto se elimino correctamente
    alert("Producto eliminado correctamente");
    return;
  }
  //si la funcion retorna false
  else
  {
     //retorna un mensaje de error
    alert("Ha ocurrido un error eliminando el producto, seguramente porqué no existe");
    return;
  }
}

$scope.buy= function()
{
  alert("compra realizada");
}
$scope.productosTienda;
$http.get('/api/productos')
.success(function(datos){
  $scope.productosTienda=datos;
  console.log( datos);
})
.error(function(datos){
  console.log('error '+ datos);
});


   //estos son los productos que se muestras (tiene parecido a un archivo json)
  /*  $scope.productosTienda =
	[
		{"id": 1, "imagen":"imagenes/productos/ipad-mini-16gb.jpg", nombre:"ipad mini 16GB", precio: 695200, unidades: 50},
		{"id": 2, "imagen":"imagenes/productos/macbook-pro.jpg", nombre:"macbook pro", precio: 4819000, unidades: 30},
		{"id": 3, "imagen":"imagenes/productos/ipad-air-16-gb.jpg", nombre:"ipad air 16 GB", precio: 1319000, unidades: 100},
		{"id": 4, "imagen":"imagenes/productos/Iphone-6-plus-16gb.jpg", nombre:"Iphone 6 plus 16GB", precio: 2449000, unidades: 22},
		{"id": 5, "imagen":"imagenes/productos/imac-intel-core-i5.jpg", nombre:"imac intel core i5", precio: 4069000, unidades: 46},
		{"id": 6, "imagen":"imagenes/productos/Moto-G3ra-Generación-8GB.jpg", nombre:"Moto G3ra Generación 8GB", precio: 779000, unidades: 120},
		{"id": 7, "imagen":"imagenes/productos/Samsung-Galaxy-J7-Lte.jpg", nombre:"Samsung Galaxy J7 Lte", precio: 999900, unidades: 62},
		{"id": 8, "imagen":"imagenes/productos/Sony-Xperia-Z3-Quad-Core-16GB.jpg", nombre:"Sony Xperia Z3 Quad Core 16GB", precio: 1549900, unidades: 25},
		{"id": 9, "imagen":"imagenes/productos/Portatil-Hp-Touch-Envy-Amd.jpg", nombre:"Portatil Hp Touch Envy Amd", precio: 1898900, unidades: 200}

	];*/




});
