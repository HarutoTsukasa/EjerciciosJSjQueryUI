function conversiones(millas) {

    var milimetros;
    var centimetros;
    var kilometros;

    milimetros = (millas * 1609340);
    centimetros = (millas * 160934.4);
    metros = (millas * 1609.34);
    kilometros = (millas * 1.60934);
    yardas = (millas * 1760);
    pies = (millas * 5280);
    pulgadas = (millas * 63360)


    return millas + " millas equivalen a : <br><br>" + milimetros + " milimetros.<br><br>" + centimetros + " centimetros.<br><br>"
        + metros + " metros.<br><br>" + kilometros + " kilometros.<br><br>" + yardas + " yardas.<br><br>" 
        + pies + " pies.<br><br>" + pulgadas + " pulgadas.";
}