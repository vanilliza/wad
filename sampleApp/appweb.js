var express = require("express"); //call the express module which is default provided by Node
var app = express(); //now we need to declare our app which is invoked
const path = require('path');
const VIEWS = path.join(__dirname,'views');

// in order to the express app to look info in specific directories: like css, images, javascripts
app.use(express.static("scripts")); //allow the application access the scripts folder contents to use in the app
app.use(express.static("images")); //allow the application access the images folder contents to use in the app

// function to set access to a specific html page
app.get('/',function(req,res) {
    res.sendFile('index.html',{root:VIEWS});
    
    console.log("You are at the home page!...")
});

// function to set access to a specific html page
app.get('/products.html',function(req,res) {
    res.sendFile('products.html',{root:VIEWS});
    
    console.log("Now you are on the products page!...")
});

// we need to set requirements for the application to run 

app.listen(process.env.PORT||3000,process.env.IP||"0.0.0.0", function(){
 console.log("Yippee its ....runing");   
});
