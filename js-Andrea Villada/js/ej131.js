let alumnas=['andy', 'caro','meli','cinthia','tati'];
let alumnos=['uriel','leo','jonas','lucas','matias'];
const alumnosAlumnas=alumnas.concat(alumnos);
console.log(alumnas[0]);
console.log(alumnas[1]);
console.log(alumnas[2]);
console.log(alumnas[3]);
console.log(alumnas[4]);

let indice=0;
while(indice<alumnos.length){
    console.log(alumnos[indice]);
    indice++;
  
}
for(indice=0; indice<alumnosAlumnas.length; indice++){ 
    console.log(alumnosAlumnas[indice]);
}

