var user_schema = require('../models/user_schema');
var express = require('express');
var router = express.Router();
var jwt = require("jwt-simple")




router.post('/insert', (request, response) => {

    var new_user = new user_schema(request.body);
    console.log(request.body)
    new_user.save(err => {
        if (err) {
            console.log('Kullanıcı Eklerken Bir Hata Oluştur')
            return response.sendStatus(500).send({ message: err })

        }
        console.log("Ekleme Başarılı")
        response.sendStatus(201)
    })
})
router.get('/select', async (req, res) => {
    var query = await user_schema.find({});
    res.send(query);
})

router.post('/login', async (request, response) => {

    userdata = request.body;
    var user = await user_schema.findOne({u_name:userdata.u_name})
    console.log("user "+  user)
    console.log(userdata)
    if(user)
    {
        if(userdata.password == user.password)
        {
            var payload = {u_id:userdata.u_id,
                           u_name:userdata.u_name}

            var token = jwt.encode(payload,'user_info')
            console.log("Giriş Başarılı");
            return response.status(200).send({token});

        }
        
    }
    else{
        console.log("Giriş Başarılısız");
        return response.sendStatus(404).send({mess:'Giriş Başarısız Şifre veya kullanıcı adı yanlıs olabilir'});
    }

})


var user = {router};

module.exports = user