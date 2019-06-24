var express = require('express');
var mongoose = require('mongoose');
var user = require('./services/userService');
var ilanlar = require('./services/ilanlarService');
var cors = require('cors');

var ilan_schema = require('./models/ilan');
var bodyParser = require('body-parser');

var app = express();
var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(cors());

app.use('/images',express.static('images'));

var mongodb_connect = mongoose.connect('mongodb://localhost:27017/ikinci_el', err => {
    if (!err) {
        console.log("bağlantı başarılı");

    }
});

app.use('/user',user.router);
app.use('/ilan',ilanlar.router);

app.listen(8080);

