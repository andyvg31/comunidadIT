let texto = 'game of thrones';
let primerLetra, segundaLetra, tercerLetra;
primerLetra= texto.charAt(0);
segundaLetra= texto.charAt(5);
tercerLetra= texto.charAt(8);
let resultado= primerLetra.concat(segundaLetra,tercerLetra);
console.log(resultado.toUpperCase());