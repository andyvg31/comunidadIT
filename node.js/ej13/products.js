const express= require('express');
var router= express.Router();

router.get('/products', function(request, response){
    response.send('Pagina: Products, método: get')
});

router.post('/products', function(request, response){
    response.send('Pagina: home, método: post')
});
router.delete('/products', function(request, response){
    response.send('Pagina: Products, método: delete')
});

router.put('/products', function(request, response){
    response.send('Pagina: home, método: put')
});
module.exports= router;