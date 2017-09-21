const Logger = require('logPlease');
const logger= Logger.create('utils');
const esPar= require('./numeros');
const numeros=[2, 3, 101, 201, 202, 100];

numeros.forEach(numero =>{
    if(esPar(numero)){
        logger.info(`El número es par` );
        
    }else{
        logger.error(`El número no es par`);
    }
})




