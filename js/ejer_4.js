

function invertir(numero) {
  //var numero ;
  console.log(numero);
if (numero < 0){
  var nstring = numero.toString();
}else{
  var nstring = numero.toString();
}

  console.log(nstring);

        var res = nstring.split('');
        console.log(res);
        numero = res.reverse().join('');
        console.log(numero);
      var  convertido = parseInt(numero);
  return convertido;
    }
