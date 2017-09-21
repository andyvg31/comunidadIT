const express= require('express');
var otherRouter= express.Router();

otherRouter.all('/products', function(request, response){
    response.send('Pagina: Products, método: all')
});

module.exports= otherRouter;