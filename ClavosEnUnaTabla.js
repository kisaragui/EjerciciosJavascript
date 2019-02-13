
function solucion(A,B,C){
  var ultimo = C.length, 
      primero = 0,
      valorSolucion = -1;
      
  while (ultimo >= primero){ // Busqueda Binaria
    var medio = Math.round((primero + ultimo) / 2);
    if (probarIntentos(A, B, C, medio)){
      ultimo = medio - 1;
      valorSolucion = medio;
    }else{
        primero = medio + 1;
    }
  }
  return valorSolucion;  
}
    
function probarIntentos(a,b,c, medio){ // Para saber las veces que los clavos son clavados en una tabla
  var intentos = [];
  for (var i = 0; i <(c.length + 1) * 2;i++){
      intentos[i]= 0;
  }
  for (var i =0; i < medio; i++){
    intentos[c[i]] += 1;
  }
  for (var i =1; i < intentos.length; i++){
    intentos[i] += intentos[i - 1];
  }
  for (var i =0; i < a.length; i++) {
    if (intentos[b[i]] - intentos[a[i]-1] === 0){
      return false;
    }
  }
return true;
}

console.log(solucion([1,4,5,8],[4,5,9,10],[4,6,7,10,2]));
