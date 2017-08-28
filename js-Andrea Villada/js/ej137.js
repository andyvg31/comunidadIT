let numeros=[];

for(numero=0; numero<=1000; numero++){
    numeros.push(numero);
}

let numerosModificados=numeros.map (function(numero, indice){
    let numerosIncrementados=numero+10;
    if(numero<=10){
    console.log(`Indice: ${indice}, Valor original: ${numero}, Valor incrementados: ${numerosIncrementados}` );   
}
    return numerosIncrementados;
});
