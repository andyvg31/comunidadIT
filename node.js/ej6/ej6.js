const saludar= (nombre, apellido, callback) => {
    console.log(`Hola ${nombre} ${apellido}`);
    callback(); 
}
const callbackSaludar= () =>{
console.log('Luego de saludar se ejecuta el callback');
}
saludar('andrea', 'villada', callbackSaludar);
