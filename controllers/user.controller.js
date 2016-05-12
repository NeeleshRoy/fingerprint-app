var User = require("../models/User.model");

exports.register = function(req, res){
    var newUser = new User();
    
    newUser.username = req.body.username;
    newUser.password = req.body.password;
    newUser.address = req.body.address;
    newUser.phone = req.body.phone;
    
    newUser.save(function(err, user){
        if(err){
            console.log(err.message);
            console.log(err.errors.username.message);
            res.send('error registering user');
        }
        else{
            console.log(user);
            res.redirect('/signup.html');
        }
    });
};