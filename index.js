const express = require('express');
const path = require('path');
const port = 8000;

const app = express();

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));  

// // middleware1
// app.use(function(req,res,next){
//     req.myName="Rushali";
//     // console.log('middleware1 called');
//     next();
// });

// // midware2
// app.use(function(req,res,next){
//     console.log('My name',req.myName);
//     next();
// });

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
    console.log(req.myName);
   return res.render('home', {
       title: "Contact List",
       contact_list: contactList
    });
});

app.get('/practice', function(req, res){
    return res.render('practice', {title: "Lets play with ejs"});
});


app.post('/create-contact', function(req,res){
    // contactList.push({
    //     name: req.body.name,
    //     phone: req.body.phone
    // });
    contactList.push(req.body);
    return res.redirect('back');
});

app.get('/delete-contact/', function(req,res){
    
    let phone = req.query.phone;
    let phone = req.query.phone;

    let contactIndex = contactList.findIndex(contact => contact.phone == phone); 

    if (contactIndex != -1){
        contactList.splice(contactIndex, 1)
    }

    return res.redirect('back');
})


app.listen(port, function(err){
   if(err){
       console.log('Error in running the server', err);
   }
   console.log('Express server is running on port',port);
});




























