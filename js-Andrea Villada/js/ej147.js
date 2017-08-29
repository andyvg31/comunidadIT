let usuario={
    username: 'batman',
    password: 'Alfred1960KPO!'
};
function autenticarUsuario(Usuario){
    if(usuario.username=='batman' && usuario.password=='Alfred1960KPO!'){
        console.log(usuario.username,usuario.password);
    } 
    else
        console.log('Usuario no autenticado');     
}
autenticarUsuario();

