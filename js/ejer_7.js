function kilometros(km){

	var resultado = (km/16.4);
	var gasolina = parseInt(Math.ceil(resultado));
	if(km<=0){
		return ""+gasolina+" litros";
	}else{
		return " Los litros que gasto "+gasolina;
	}


}
