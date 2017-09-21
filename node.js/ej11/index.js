const express= require('express');
const program= express();
const port=3000;
const path= require('path');

program.get('/', (request,response) =>{
   response.sendfile(path.join(__dirname,'index.html'));
});
program.get('/Products', (request,response) =>{
    response.sendfile(path.join(__dirname,'productos.html'));
})

program.listen(port, (error) => {
    if (error) {
        return console.log(`No se pudo levantar el servidor en el puerto ${port}`)
      }
    
      console.log(`Servidor corriendo en el puerto ${port}`)
    })