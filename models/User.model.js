var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password : String,
    address :String,
    phone: String
});

module.exports = mongoose.model('User', UserSchema);