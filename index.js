const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose'); 
const { collection } = require('./models/contact');
const Contact = require('./models/contact');

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
        phone: "1234567891"
    },
    {
        name: "Sai",
        phone: "1234567892"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    }
]

app.get('/', function(req, res){
    console.log(req.myName);

    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error in fetching contacts from db');
            return;
        }

   return res.render('home', {
       title: "Contact List",
       contact_list: contacts
     });
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
    // contactList.push(req.body);
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    }, function(err, newContact){
        if (err){console.log('error in creating a contact');
        return;}

        console.log('********', newContact);
        return res.redirect('back');
    });

});

app.get('/delete-contact/', function(req,res){
    
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




























