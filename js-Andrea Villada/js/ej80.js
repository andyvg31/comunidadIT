let numero=0;
let suma=0;
do{
    if(numero % 2 == 1){
        console.log( `${numero} numero.suma parcial: ${suma}`);
    }
    numero++;
    suma+=numero;
    
}
while(numero<1000);