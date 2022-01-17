const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res){
   return res.render('home', {title: "My Contact List"});
});

app.get('/practice', function(req, res){
    return res.render('practice', {title: "Lets play with ejs"});
});



app.listen(port, function(err){
   if(err){
       console.log('Error in running the server', err);
   }
   console.log('Express server is running on port',port);
});