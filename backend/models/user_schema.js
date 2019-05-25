var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    u_id:Number,
    u_name:String,
    u_password:String,
    name:String,
    location:String,
    e_mail:String,
    tel_no:String
});

userSchema.pre('save',function(next){
    var currentDate = new Date();
    this.created = currentDate;
    


    next();
})
var user = mongoose.model('user',userSchema);

module.exports = user;
