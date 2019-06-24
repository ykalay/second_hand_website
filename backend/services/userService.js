var user_schema = require('../models/user_schema');
var express = require('express');
var router = express.Router();
var jwt = require("jwt-simple")
var jwtt = require("jsonwebtoken")




router.post('/insert', (request, response) => {

    var new_user = new user_schema(request.body);
    console.log(request.body)
    new_user.save(err => {
        if (err) {
            console.log('Kullanıcı Eklerken Bir Hata Oluştur')
            return response.status(500).send({ message: err })

        }
        console.log("Ekleme Başarılı")
        response.status(201).send({ message: 'Kayıt Tamam' })
    })
})
router.get('/select', async (req, res) => {
    var query = await user_schema.find({});
    res.send(query);
})
router.get('/get/:token', async (req, res) => {
    //console.log(req.params)
    var payload = jwtt.verify(req.params.token,"user_info");
    
    //console.log(payload)
    var query = await user_schema.find({u_name:payload.u_name});
    res.send(query);
    console.log(query)
    
})
router.get('/get/payload/:token',async(req,res)=>{
    var payload = jwtt.verify(req.params.token,"user_info");
    res.send(payload);
    
})
router.get('/getbyid/:id',async (req,res)=>{
    user_schema.findById(req.params.id,(err,data)=>{
        if(err)
        {
            console.log('bululnamadı')
        }
        console.log(data)
        res.send(data);
    });
})


router.post('/update', async (req, res) => {
    
        console.log(req.body)
        user_schema.findOneAndUpdate({u_name:req.body.u_name},{tel_no:req.body.tel_no,u_password:req.body.u_password,name:req.body.name,location:req.body.location}, (er, data) => {
        if (er) {
            throw er;
        }

        console.log(data)
        

    });
})

router.post('/login', async (request, response) => {

    userdata = request.body;
    var user = await user_schema.findOne({ u_name: userdata.u_name })
    console.log("user " + user)
    console.log(userdata)
    if (user) {
        if (userdata.password == user.password) {
            var payload = {
                _id:userdata._id,
                u_id: userdata.u_id,
                u_name: userdata.u_name
            }

            var token = jwt.encode(payload, 'user_info') //daha sonra kullanmak için token ver
            console.log("Giriş Başarılı");
            return response.status(200).send({ token }); //token

        }

    }
    else {
        console.log("Giriş Başarısız");
        return response.sendStatus(401).send({ mess: 'Giriş Başarısız Şifre veya kullanıcı adı yanlıs olabilir' });
    }

})


var user = { router };

module.exports = user