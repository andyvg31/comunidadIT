function obtenerPerimetroRectangulo(base, altura){

    let perimetro=0
    if (base===altura){
        perimetro= 4*base
    }
    else{
        perimetro= (2*(altura + base));
    }   
    
    console.log(`El perímetro es ${perimetro}`);
    if(perimetro>100){
        console.log(`El perímetro es muy grande`);
    }
    else{
        console.log(`Este perímetro no es muy grande`);
    }
}

obtenerPerimetroRectangulo(10,7);
obtenerPerimetroRectangulo(5,7);