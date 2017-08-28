let numeros=[];

for(numero=1; numero<=1000; numero++){
    numeros.push(numero);
}
let numerosPares=numeros.filter(function(numero){
    return numero %2===0;
});
let numerosImpares=numeros.filter(function(numero){
    return numero %2!==0;
});

for(indice=numerosPares.length-10; indice<numerosPares.length; indice++ ){
    console.log(numerosPares[indice]);
}
for(indice=numerosImpares.length-10; indice<numerosImpares.length; indice++){
    console.log(numerosImpares[indice]);
}

