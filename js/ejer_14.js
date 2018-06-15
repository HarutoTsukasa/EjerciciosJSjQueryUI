var cont = 0;
var acumulativo = 0;

function suma(numero) {


    var numero = parseInt(numero);
    if (numero != 0) {
        cont++;
        acumulativo = acumulativo + numero;
    }

    return "los numeros son: " + cont + "<br>La suma de todos son: " + acumulativo;
    
}