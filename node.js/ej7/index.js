const saludador= require('./saludador');
const callbackSaludar= () =>{
    console.log('Luego de saludar se ejecuta el callback');
    }
const saludo=saludador ('andrea', 'villada', callbackSaludar);

    