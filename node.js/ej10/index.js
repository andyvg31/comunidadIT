const express= require('express');
const program= express();
const port=3000;

program.get('/', (request,response) =>{
    response.send('Bienvenido');
})
program.get('/Productos', (request,response) =>{
    response.send('listado de productos');
})
program.post('/Productos', (request,response) =>{
    response.send('crear un producto');
})
program.put('/Productos', (request,response) =>{
    response.send('actualizar un producto');
})
program.delete('/Productos', (request,response) =>{
    response.send('borrar un producto');
})
program.get('/Usuarios', (request,response) =>{
    response.send('listado de usuarios');
})
program.post('/Usuarios', (request,response) =>{
    response.send('crear un usuario');
})
program.put('/Usuarios', (request,response) =>{
    response.send('actualizar un usuario');
})
program.delete('/Usuarios', (request,response) =>{
    response.send('borrar un usuario');
})
program.all('/', (request,response) =>{
    response.send('borrar un usuario');
})

program.listen(port, (error) => {
    if (error) {
        return console.log(`No se pudo levantar el servidor en el puerto ${port}`)
      }
    
      console.log(`Servidor corriendo en el puerto ${port}`)
    })



