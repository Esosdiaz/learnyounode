var http = require('http');//llamada al modulo http
var direccion = process.argv[2]; //ruta del archivo
http.get(direccion, function callback(response){//llamada GET simplificada al modulo http
	 response.setEncoding("utf8");//setea la respuesta de manera que nos entregue un string
	 response.on("data",function(data){//funcion callback, asi aparece en las pistas del ejercicio
	 console.log(data);
	 })
});