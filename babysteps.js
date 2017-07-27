var suma=0; //variable para recoger el resultado
for(var i=2; i<process.argv.length; i++){ //condicionales para el ciclo que partirá desde la posicion dos, y terminará en el ultimo numero del arr
	suma += parseInt(process.argv[i]); //suma de los numeros que el ciclo está iteranado
	suma.toString(); //conversion a string
}
console.log(suma);