let zona= 2;
let localidadFiltrada;
switch  (zona){
    case 1: 
    localidadFiltrada= 'Capital Federal';
    break;
    case 2:
    localidadFiltrada= 'Santa Fe';
    break;
    case 3:
    localidadFiltrada='Buenos Aires';
    break;
    default:
    localidadFiltrada='Capital Federal';
}


let juegos=[
    {
    nombre:'Crash Bandicoot N. Sane Trilogy Juego Ps4 Fisico Sellado',
    precio:1.060,
    cantidadVendida:276,
    localidad:'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre:' Lego Marvel Super Heroes',
    precio: 700,
    cantidadVendida: 48 ,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre:'Gta V Ps4 Físico',
    precio: 1.449,
    cantidadVendida: 82 ,
    localidad: 'Santa Fe',
    imprimirEnPantalla: imprimir
    },

    {
    nombre:'Mortal Kombat Xl Ps4 Original Fisico Sellado Nuevo',
    precio: 1.190,
    cantidadVendida: 348,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    
    },

    {
    nombre: 'Gta V Ps4 Fisico Grand Theft Auto V Gta5 Nuevo Sellado',
    precio: 1.250,
    cantidadVendida: 445,
    localidad: 'Buenos Aires',
    imprimirEnPantalla: imprimir
    },
    
    {
    nombre: 'Fifa 2017 Juego Físico Play 4 Nuevo!!!!!!',
    precio: 890, 
    cantidadVendida: 182,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre:'Uncharted 4 Ps4 Fisico El Desenlace Del Ladrón Playstation 4',
    precio: 950 ,
    cantidadVendida: 517 ,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre:'Mortal Kombat Xl Ps4 Cd Fisico Sellado Original !!!',
    precio: 940,
    cantidadVendida: 275 ,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre: 'Need For Speed Ps4 Físico Nuevo Sellado Playstation Alclick',
    precio: 790,
    cantidadVendida: 89,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre: 'Lego Batman',
    precio: 1.000,
    cantidadVendida: 39,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre: 'Fifa 17 Ps4 Original Fisico 2017',
    precio: 1.290,
    cantidadVendida: 310,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    },

    {
    nombre: 'Resident Evil 7 Ps4 Biohazard Físico',
    precio: 1.390,
    cantidadVendida: 154,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir
    
    },

    {
    nombre: 'Dragon Ball Xv Xenoverse 2 Ps4 Fisico Nuevo Dbxv2 Alclick',
    precio: 1.390,
    cantidadVendida: 241,
    localidad: 'Capital Federal',
    imprimirEnPantalla: imprimir 
    },
        
]

function imprimir() {
    
    mensaje= `${this.nombre}\n` 
    mensaje+= ` $${this.precio}\n`
    mensaje+= ` ${this.cantidadVendida} vendidos \n`
    mensaje+=` ${this.localidad} \n`
    console.log(mensaje);
}
 
 function ordenar(orden, juegos){
switch(orden){
    case  'ASC':
    return juegos.sort(function(juegoA, juegoB){
        return juegoA.precio - juegoB.precio;

    });
    break;
    case 'DESC':
    return juegos.sort(function(juegoA, juegoB){
        return juegoB.precio - juegoA.precio;
    });
    break;
    default: 
    return juegos.sort(function(juegoA, juegoB){
        return juegoA.precio - juegoB.precio;

    });
    break; 
}
 }
 
ordenar('ASC', juegos).forEach(function(juego){
     juego.imprimirEnPantalla();
});
ordenar('DESC', juegos).forEach(function(juego){
    juego.imprimirEnPantalla();
});