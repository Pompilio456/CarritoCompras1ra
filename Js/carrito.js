//modulo angular con nombre ng-shop
var shop = angular.module('ng-Shop', []);

//se crea una fabrica con nombre $shop y "recibe" $rootscope
  shop.factory('$shop',['$rootScope',function($rootScope){
     //se inicializa un vector donde se guardara el contenido del carrito
    $rootScope.contenedorDelCarrito = [],
    //se inicializa variable donde se guardara el precio total de todos los productos en el carrito
    $rootScope.precioTotalCarrito = 0,
    //se inicializa variable donde se guardara la cantidad total de productos en el carrito
    $rootScope.totalProductosCarrito = 0;
    return{

      //la funcion add recibe un producto nuevo
      add: function(productoParametro)
  		{
  			try{

            //valida si el producto ya existe en el carrito
  				if(this.validarExistenciaDelProducto(productoParametro,$rootScope.contenedorDelCarrito) === true)
            //si existe
  				{
               //se altera (acumulador) el precio total del carro
  					$rootScope.precioTotalCarrito += parseFloat(productoParametro.precio * productoParametro.qty,10);
               //se altera (acumulador) la cantidad de productos totales
  					$rootScope.totalProductosCarrito += productoParametro.qty;
  					return {"msg":"updated"};
  				}
  				//en otro caso, lo añadimos al carrito
  				else
  				{
               //se altera (acumulador) el precio total del carro
  					$rootScope.precioTotalCarrito += parseFloat(productoParametro.precio * productoParametro.qty,10);
               //se altera (acumulador) la cantidad de productos totales
  					$rootScope.totalProductosCarrito += productoParametro.qty;
               //agrega  al carrito
  					$rootScope.contenedorDelCarrito.push(productoParametro);
  					return {"msg":"insert"};
  				}
  			}
  			catch(error)
  			{
  				alert("Error " + error);
  			}
  		},
      //funcion que recibe el prducto que se quiere guardar y los productos existentes
  		validarExistenciaDelProducto: function(producto, productos)
  		{
         //recorre el vector donde estan guardados los productos
  		    var i, len;
  		    for (i = 0, len = productos.length; i < len; i++)
  		    {
             //si el producto existe
  		        if (productos[i].codigo === producto.codigo)
  		        {
                 //altera (acumulador) la cantidad de unidades de dicho producto
  		        	productos[i].qty += producto.qty;
               //sale y retorna true
  		            return true;
  		        }
  		    }
          //retorna false si no encuentra el producto
  		    return false;
  		},

      //la funcion remove recibe el id del producto
      remove: function(id)
     {
       try{
          //recorre el vector de productos
         var i, len;
         for (i = 0, len = $rootScope.contenedorDelCarrito.length; i < len; i++)
           {
             //si existe
               if ($rootScope.contenedorDelCarrito[i].id === id)
               {
                  //le resta al precio total del carro el precio total de ese producto
                 $rootScope.precioTotalCarrito -= parseFloat($rootScope.contenedorDelCarrito[i].precio * $rootScope.contenedorDelCarrito[i].qty,10);
                 //le resta la cantidad detotal del prodcuto a las que hay en el carro
                 $rootScope.totalProductosCarrito -= $rootScope.contenedorDelCarrito[i].qty;
                 $rootScope.contenedorDelCarrito.splice(i, 1);

                 if(isNaN($rootScope.precioTotalCarrito))
                 {
                   $rootScope.precioTotalCarrito = 0;
                 }
                 return {"msg":"deleted"};
               }
           }
       }
       catch(error)
       {
         alert("Error " + error);
       }
     }
    };





  }]);
