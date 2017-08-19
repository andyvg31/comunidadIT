/*
let dia= 1;
let nombreDelDia=null;

if(dia<=7) {
console.log('Hoy es...');
}
else{
    console.log('Día inválido');
}
*/

/*let dia= 1;
let nombreDelDia= null;

switch (dia) {
    case 1:
        nombreDelDia='lunes';
        break;
    case 2:
        nombreDelDia= 'martes';
        break;
    case 3:
        nombreDelDia= 'miércoles';
        break;
    case 4: 
        nombreDelDia= 'jueves';
        break;
    case 5:
        nombreDelDia= 'viernes';
        break;
    case 6:
        nombreDelDia= 'sábado';
    break;
    case 7:
        nombreDelDia= 'domingo';
    break;
    default:
        nombreDelDia= null;
    break;
}
if(nombreDelDia !== null){
    console.log(`El día seleccionado es ${nombreDelDia}`);
}
else{
    console.log('Por favor seleccionar un número del 1 al 7');
}
*/
let dia=5;
let nombreDelDia=null;

if(dia===1){
    nombreDelDia='lunes';   
}
else 
    if (dia===2){
        nombreDelDia='martes';
        
    }
else
    if(dia===3){
        nombreDelDia='miércoles';
    }
else
    if(dia===4){
        nombreDelDia='jueves';
    }
else 
    if(dia===5){
        nombreDelDia='viernes';
    }
else
    if(dia===6){
        nombreDelDia='sábado';
    }
else
    if(dia===7){
        nombreDelDia='domingo';
    }
    else{
        nombreDelDia=null;
    }
    if(nombreDelDia !== null){
    console.log(`El día seleccionado es ${nombreDelDia}`);
}
else{
    console.log('Por favor seleccionar un número del 1 al 7');
}
