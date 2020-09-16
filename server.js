const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(request, response){
    //console.log(request);
    response.sendFile(__dirname + '/index.html');   // if __dirname is missing, getting typerror.
});

app.post("/", function(request, response){  // "/" here is same as in index.html form "action"
    console.log(request.body);
    let num1 = Number(request.body.num1);   // this is casting not parsing
    let num2 = Number(request.body.num2);
    let result = num1 + num2;
    console.log(`${num1} + ${num1} = ${result}`);
});
/*app.get('/about', function(req, res){
    res.send("<h2>ney</h2>");
});

app.get('/contact', function(req, res){
    res.send("<h3>dog@cat.it</h3>");
});*/

app.listen(3000, function() {   // port number 3000
    console.log('connection ok.');
});