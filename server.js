//Require express server
var express = require("express");

//create app
var app = express();

//folder to run index.html
app.use(express.static('app'));

//start the server
app.listen(3000,function(){
	console.log("Running on HTTP port 3000");
});