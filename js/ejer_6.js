function verificarCapicua(numero){

	var numInvertido = numero.toString();
	numInvertido = numInvertido.split('');
	numInvertido =  numInvertido.reverse().join('');

	if (numero == numInvertido) {
		return "El número " + numero + " es capicúa";
	}else{
		return "El número " + numero + " no es capicúa";
	}
}
