let usuario={
    username:null,
    password:null,
    saludar:function(){
        if(usuario.username!==null){
            console.log(`Hola, soy el usuario ${username}`);
        }
        else{
            console.log('Este usuario no tiene username');
        }
    },
    updatePassword:function(nombreDeUsuario){
        nombreDeUsuario=usuario.password;
    },
    updaterUsername:function(nombreDeUsuario){
        nombreDeUsuario=usuario.username;

    }
}
usuario.saludar();
console.log(usuario.username);
console.log(usuario.password);