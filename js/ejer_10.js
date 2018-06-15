function comprobar(dia, mes, año) {

    if (año == 0) {
        return "Fecha incorrecta"
    }
    else if (mes == 2 && (dia >= 1 && dia <= 28)) {
        return "la fecha " + dia + "/" + mes + "/" + año + " es correcta";
    }
    else if ((mes == 4 || mes == 6 || mes == 9 || mes == 11) && (dia >= 1 && dia <= 30)) {

        return "la fecha " + dia + "/" + mes + "/" + año + " es correcta";

    } else if ((mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) && (dia >= 1 && dia <= 31)) {
        return "la fecha " + dia + "/" + mes + "/" + año + " es correcta";
    } else {
        return "la fecha " + dia + "/" + mes + "/" + año + " es incorrecta";
    }

}