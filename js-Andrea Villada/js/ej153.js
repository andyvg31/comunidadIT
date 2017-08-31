let aritmetica={
    suma:function(numero, sumar){
        console.log (numero+sumar);
        console.log(typeof numero,typeof sumar);
    },
    resta:function(numero, restar){
        console.log(numero-restar);
        console.log(typeof numero,typeof restar);
    },

    multiplicar:function(numero, multiplicar){
        console.log(numero*multiplicar);
        console.log(typeof numero,typeof multiplicar);
    },  
    
    dividir:function(numero, dividir){
        console.log(numero/dividir);
        console.log(typeof numero,typeof dividir);
    },
    
    mostrarModulo:function(numero, modulo){
        console.log(numero % modulo);
        console.log(typeof numero,typeof modulo);
    },     

}
aritmetica.suma(2, 10);
aritmetica.resta(10, 5);
aritmetica.multiplicar(3, 100);
aritmetica.dividir(40, 2);
aritmetica.mostrarModulo(20, 2);
