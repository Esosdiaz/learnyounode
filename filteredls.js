var fs =require('fs');
var path=require('path');

fs.readdir(process.argv[2], function(err,data){//llamado asincrono que nos retornará los archivos requeridos
	filtro(data);
} );

function filtro(data){
	for(var i=0;i<data.length;i++){//ciclo que itera la lista de archivos
		if(path.extname(data[i])== "."+process.argv[3])//y luego los filtra a través de esta condicional (se agrega un punto, porque el segundo argumento no incluye el punto.
		console.log(data[i]);
	}
}