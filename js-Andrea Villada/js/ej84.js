let linea=1;
do{
    let caracteres=0;
    let asterisco='';
    if (linea % 2 == 1) {
        do{
           asterisco+= '*';
            caracteres++  
        }
        while (caracteres < linea);  
            console.log(asterisco);
    } 
    linea++; 
}
while(linea<=8)