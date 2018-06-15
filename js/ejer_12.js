function adivinar(num, n) {

    var secreto;

    console.log(num);

    if (num > 100 || num < 0) {
        secreto = "El Número es incorrecto"
    }
    else if (num < n) {

        secreto = "El Número es Menor"


    }

    else if (num > n) {

        secreto = "El numero es mayor"

    }
    else if (num == n) {

        secreto = "Adivinaste ¡FELICITACIONES!"

    }


    return { "secreto": secreto };
}