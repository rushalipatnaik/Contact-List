const express = require('express');
const port = 8000;

const app = express();

app.get('/', function(req, res))



app.listen(port, function(err){
   if(err){
       console.log('Error in running the server', err);
   }
   console.log('Express server is running on port',port);
});