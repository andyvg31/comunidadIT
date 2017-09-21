const express= require('express');
const program= express();
const port=3000;

program.get('/', function(request, response){
    response.send('Bienvenidos a Node.js Server Side');
});

program.listen(port, (error) => {
    if (error) {
        return console.log(`No se pudo levantar el servidor en el puerto ${port}`)
      }
    
      console.log(`Servidor corriendo en el puerto ${port}`)
    })

