function sumar(){
    var resultado=0;
    var indice;
    for(indice=0; indice<arguments.length;indice++){
        resultado+=arguments[indice];
    }
    return resultado;
  }

 
console.log(sumar(4, 6, 7, 3, 2));
 
console.log(sumar(4, 6, 7, 3, 2, 40, 53, 5, 4, 2));
