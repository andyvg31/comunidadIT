function autenticarUsuario(usuario, password){
    if(usuario==='nacho' && password==='Nerd1979'){
        return `Bienvenido ${usuario}, te estabamos esperando`;
    }
    else if(usuario==='pedro' && password==='Batman0217'){
        return `Bienvenido ${usuario}, te estabamos esperando`;
    }
    else if(usuario==='martha' && password==='Madre2312'){
        return `Bienvenido ${usuario}, te estabamos esperando`;
    }
    
    else{
        return `Por favor ingrese credenciales válidas`;
    }
}
            
console.log(autenticarUsuario('nacho', 'Nerd1979'));
console.log(autenticarUsuario('pedro', 'Batman0217'));
console.log (autenticarUsuario('martha', 'Madre2312'));