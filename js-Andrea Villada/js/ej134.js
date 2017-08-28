let numeros=[];
let numero=0;
let suma=0;


while(numero<=10000){
    numeros.push(numero);
    numero++;   
}
for(indice=0; indice<numeros.length; indice++){
    suma+=numeros[indice];
    console.log(`El número es: ${numeros[indice]} y la suma parcial es ${suma}`);
}
console.log(suma);
if(suma===50005000){
    console.log('El ejercicio es correcto');
}
else{
    console.log('Verificar el ejercicio para obtener el resultado esperado!!!');
}