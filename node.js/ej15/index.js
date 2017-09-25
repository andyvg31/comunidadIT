const express = require('express');
const app = express();

var requestTime = function (req, res, next) {
    const mensaje = `Request a ${req.baseUrl} ${Date.now()}`
    console.log(mensaje)
    next();
  };
  
  app.use(requestTime)

  app.get('/', function(request, response){
    response.json({
        status: 200,
        message: 'Este request/response está OK'
      })
});
 
app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});