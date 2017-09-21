const express= require('express');
const program= express();
const port=3000;

program.get('/api/products', (request,response) =>{
    response.json({
        descripcion: 'Productos',
        items: [
          { nombre: 'taza de Star Wars' , precio: 300},
          { nombre: 'FIFA 22 PS4' , precio: 1000},
          { nombre: 'Remera superheore' , precio: 100},
          { nombre: 'Bincha de Piñon fijo' , precio: 200},
          { nombre: 'Grande de Muzza' , precio: 120},
          { nombre: 'Botella de Fernet por 1 litro' , precio: 220}
        ]
      });
})
program.listen(port, (error) => {
    if (error) {
        return console.log(`No se pudo levantar el servidor en el puerto ${port}`)
      }
    
      console.log(`Servidor corriendo en el puerto ${port}`)
    })
