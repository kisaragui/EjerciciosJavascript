function compararAnagrama(palabra, subPalabra){
  var a = palabra.toLowerCase().split("").sort().join("");
  var b = subPalabra.toLowerCase().split("").sort().join("");
  if (palabra.toLowerCase() === subPalabra.toLowerCase()){ 
  return false;
  }
  if( a === b){
    return true;
  }
  return false;
}

function solucion(frase,coincidencia){
  var contador = 0;
  for ( var i = 0;i < frase.length; i++ ){
    if(compararAnagrama(frase.substring(i,i + coincidencia.length),coincidencia)){
    contador +=1;
    }
  }
  return contador;
}

console.log(solucion("hola, que buena ola Laomir","OAL"));
