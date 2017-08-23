function esPar(numero){
    if(numero %2===0){
      return  `${numero} es par`;
    }
    else{
        return  `${numero} no es par`;
    }
}
console.log(esPar(2));
console.log(esPar(5));
console.log(esPar(3));
console.log(esPar(24));
console.log(esPar(12));