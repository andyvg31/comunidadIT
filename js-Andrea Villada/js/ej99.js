for(let numero=0, suma=0, conteo= 0; numero<10000 && conteo < 10; numero++){
    if (numero %2==0){
        conteo++;  
        suma+=numero;
        console.log(`Numero ${numero}. La suma es ${suma}`);
    }
}
    
    

