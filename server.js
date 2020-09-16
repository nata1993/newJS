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
    let num1 = Number(request.body.weight);   // this is casting not parsing
    let num2 = Number(request.body.height);
    let result = num1 / ((num2 * num2) / 10000);    // divide by 100 is because 100cm * 100 cm = 10 000 but we need it in meters
    console.log(`Your BMI: ${result}`);


        if (result < 19){
            console.log("You are underweight!");
        }
        if (result >= 19 && result < 24.9){
                console.log("You are in normal weight!");
        }
        if(result >= 25 && result < 29.9){
                console.log("You are overweight!");
        }
        if (result >= 30){
                console.log("You are FAT!");
        }
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