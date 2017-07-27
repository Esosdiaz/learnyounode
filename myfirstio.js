var fs = require("fs");//carga del modulo fs
var archivo = process.argv[2];
var textoCompleto = fs.readFileSync(archivo).toString(); //Envia el texto completo dentro de la ruta, obviando las dos primeras posiciones y convirtiéndolo en un string
var numLineas = textoCompleto.split("\n").length-1; //devuelve el número de elementos dentro del array que se obtuvo a partir de dividir el string anterior en base a los saltos de línea(\n) se le resta uno a esa cantidad, ya que el ultimo item dentro del array está vacío. 
console.log(numLineas);