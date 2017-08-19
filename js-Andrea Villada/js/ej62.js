let numeroDeMes= 7;
let nombreDelMes= null;
let cantidadDeDias= null;

switch(numeroDeMes){
    case 1:
        nombreDelMes= 'enero';
        cantidadDeDias= '31';
    break;
      case 2:
        nombreDelMes= 'febrero';
        cantidadDeDias= '28';
    break;
      case 3:
        nombreDelMes= 'marzo';
        cantidadDeDias= '31';
    break;
      case 4:
        nombreDelMes= 'abril';
        cantidadDeDias= '30';
    break;
      case 5:
        nombreDelMes= 'mayo';
        cantidadDeDias= '31';
    break;
      case 6:
        nombreDelMes= 'junio';
        cantidadDeDias= '30';
    break;
      case 7:
        nombreDelMes= 'julio';
        cantidadDeDias= '31';
    break;
      case 8:
        nombreDelMes= 'agosto';
        cantidadDeDias= '31';
    break;
      case 9:
        nombreDelMes= 'septiemnbre';
        cantidadDeDias= '30';
    break;
      case 10:
        nombreDelMes= 'octubre';
        cantidadDeDias= '31';
    break;
      case 11:
        nombreDelMes= 'noviembre';
        cantidadDeDias= '30';
    break;
      case 12:
        nombreDelMes= 'diciembre';
        cantidadDeDias= '31';
    break;
    default:
        nombreDelMes=null;
        cantidadDeDias=null;
    
}
if (nombreDelMes && cantidadDeDias===null){
    console.log('Ingrese un número entre 1 y 12');
}
else{
    console.log(`El mes seleccionado es ${nombreDelMes} y tiene ${cantidadDeDias} días`);
}