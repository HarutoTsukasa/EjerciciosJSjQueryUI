/** Un alumno desea comprar una computadora portátil en El Lago, 
 * antes desea sabes cuánto le costará en realidad si le tiene que 
 * agregar al precio de la LapTop, $300 pesos de impuestos que le 
 * cobran el Km. 30 el SAT, y con los Soldados, tiene que pagar de 
 * impuesto el 5% del valor inicial de la LapTop. Cuánto le saldrá 
 * en total la LapTop. */

function precio(valor) {

    var km = 300;
    var impKm = parseInt(valor) + km;
    var impSoldados = parseInt(impKm) * 0.05;
    var total = parseInt(impKm) + parseInt(impSoldados);

    return "El coste total de la Laptop más el Impuesto de KM ($" + km + ") y más el 5% del valor inicial ($" + impSoldados + ") es de: $" + total + " USD";
}