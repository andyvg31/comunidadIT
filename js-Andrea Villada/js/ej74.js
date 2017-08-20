let linea=1;
while(linea<=8){
    let caracteres=0;
    let asterisco='';
    if (linea % 2 == 1) {
        while(caracteres < linea){
            asterisco+= '*';
            caracteres++  
        }
        console.log(asterisco);
    }
    linea++;
}
