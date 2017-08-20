let linea=13;

do{   
    let caracteres=0;
    let asteriscos='';
    do{
        caracteres++;
        asteriscos+='*';
    }
    while(caracteres<=linea)
        console.log(asteriscos);
        linea--;            
    }
while(linea>=0);