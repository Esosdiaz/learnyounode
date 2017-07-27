var fs = require("fs");//carga del modulo fs
var archivo = process.argv[2];
fs.readFile(archivo, "UTF8", function(err, data){//llamada asíncrona, a través del readFile que se encargará de leer los datos del archivo a analizar. parametros: el primero es el array desde su segunda posicion, el segundo está indicando que devuelva los datos en forma de string, y el ultimo es la orden de lo que se hará con la información obtenida
var numLineas = data.split("\n").length-1; //corta el string y lo separa con cada salto de linea, restandole el ultimo que está vacío
console.log(numLineas)
} )