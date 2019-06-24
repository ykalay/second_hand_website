var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ilanSchema = new Schema({
    ilan_id:Number,
    ilan_baslik:String,
    ilan_aciklama:String,
    ilan_from_user_id:String,
    ilan_location:String,
    ilan_price:Number,
    ilan_image_path:String,
    ilan_catagory:String
    
});

ilanSchema.pre('save',function(next){
    var currentDate = new Date();
    this.created = currentDate;
    


    next();
})
var ilan = mongoose.model('ilan',ilanSchema);

module.exports = ilan;
