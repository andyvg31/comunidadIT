const express= require('express');
const exphbs  = require('express-handlebars');
const app= express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static('public'))

app.get('/', function(req, res){
    res.render('home');
})

app.get('/products', function (req, res) {
  res.render('products')
})

app.get('/contact', function (req, res) {
  res.render('contact')
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})