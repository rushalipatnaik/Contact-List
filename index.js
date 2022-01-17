const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

var contactList = [
    {
        name: "Rushali",
        phone: "1234567890"
    },
    {
        name: "Sai",
        phone: "1234567890"
    },
    {
        name: "Rush",
        phone: "1234567890"
    },
    {
        name: "Piggy",
        phone: "1234567890"
    }
]

app.get('/', function(req, res){
   return res.render('home', {
       title: "Contact List",
       contact_list: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {title: "Lets play with ejs"});
});


app.post('/create-contact', function(req,res){
    return res.redirect('/practice');
});


app.listen(port, function(err){
   if(err){
       console.log('Error in running the server', err);
   }
   console.log('Express server is running on port',port);
});