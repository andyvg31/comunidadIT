const express= require('express');
var router= express.Router();

router.get('/', function(request, response){
    response.send('Pagina: home, método: get')
});

router.post('/', function(request, response){
    response.send('Pagina: home, método: post')
});


module.exports=router;

