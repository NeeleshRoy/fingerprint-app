var express= require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path =  require("path");
var controller = require("./controllers/user.controller");

var port = 8080;
var db = "mongodb://neelesh:Login123@ds035543.mlab.com:35543/fingerprint";

mongoose.connect(db);

app.use(express.static(path.join(__dirname, 'views')));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : true
}));

app.get('/', function(req,res){
   res.render('index.html'); 
});

app.post('/',controller.register);

app.listen(port, function(){
    console.log("The server is running on port : "+port);
});