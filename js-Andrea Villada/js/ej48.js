const mensaje= '3.14 es un gran número, pero mejor es 42 que le da significado a la vida';
const pi= parseFloat(mensaje);
let significadoDeLaVida= mensaje.substr(38,2);
significadoDeLaVida= parseInt(significadoDeLaVida);
const resultado= pi + significadoDeLaVida;
console.log(resultado);
console.log(resultado.toString() + ' ' + 'es el resultado de sumar las variables pi y significadoDeLaVida');



