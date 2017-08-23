function obtenerPerimetroRectangulo(base, altura){

    if (base===altura){
       console.log((2* altura) + (2*base)); 
    }
    else{
        if(base!==altura){
        console.log (2*(altura + base));
        }
     
    }
        
}



obtenerPerimetroRectangulo( 10, 20);
console.log(obtenerPerimetroRectangulo( 50, 30));
console.log(obtenerPerimetroRectangulo( 29, 35));