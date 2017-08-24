function mostrarNumeros(inicio, fin){
    if (inicio<fin){
        for( let numero=inicio; numero<=fin; numero++)
            console.log(numero);
    }
    else{
        for(let numero=inicio; numero>=fin; numero--)
            console.log(numero);
    }

}
/*
mostrarNumeros(0,1000);
mostrarNumeros(1000,0);
mostrarNumeros(100,100);
mostrarNumeros('100',300);
*/
mostrarNumeros(8,8);