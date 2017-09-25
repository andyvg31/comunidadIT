const express= require('express');
const program=express();
const port=3000;

var wiki=require('./home');
program.use('/', wiki);

var search=require('./products');
program.use('/products', search);


program.listen(port, (error) => {
    if (error) {
        return console.log(`No se pudo levantar el servidor en el puerto ${port}`)
      }
    
      console.log(`Servidor corriendo en el puerto ${port}`)
    })
