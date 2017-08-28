function agregarGusto (gustos, nuevoGusto){  
    let primerGusto=gustos.shift();
    gustos.unshift(nuevoGusto);

    if (primerGusto) {
        gustos.push(primerGusto);
    }
}
let helados=[];
agregarGusto(helados, 'dulce de leche');
agregarGusto(helados, 'frutilla');
agregarGusto(helados, 'americana');
agregarGusto(helados, 'maracuya');
agregarGusto(helados, 'limon');
agregarGusto(helados, 'chocolate');
agregarGusto(helados, 'sambayon');
agregarGusto(helados, 'cereza');
agregarGusto(helados, 'anana');
agregarGusto(helados, 'oreo');

console.log(helados);