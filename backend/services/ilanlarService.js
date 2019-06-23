var ilan_schema = require('../models/ilan');
var express = require('express');
var router = express.Router();



router.post('/insert', (request, response) => {

    var new_ilan = new ilan_schema(request.body);
    console.log(request.body)
    console.log(request.headers)
    
    new_ilan.save(err => {
        if (err) {
            console.log('İlan Eklerken Bir Hata Oluştur')
            return response.sendStatus(500).send({ message: err })

        }
        console.log("İlan Ekleme Başarılı")
        response.sendStatus(201)
    })
})
router.get('/select', async (req, res) => {
    var query = await ilan_schema.find({});
    res.send(query);
})
router.get('/select/otomobil',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"otomobil"})
    res.send(query);
})

router.get('/select/telefon',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"telefon"})
    res.send(query);
})
router.get('/select/ev',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"ev"})
    res.send(query);
})
router.get('/select/diger',async(req,res)=>{
    var query = await ilan_schema.find({"ilan_catagory":"diger"})
    res.send(query);
})

router.post('/ekle',async(req, res)=>{
    var new_ilan = new ilan_schema(request.body);
    console.log(request.body)
    new_user.save(err => {
        if (err) {
            console.log('İlan Eklerken Bir Hata Oluştur')
            return response.status(500).send({ message: err })

        }
        console.log("İlan Ekleme Başarılı")
        response.status(201).send({message:'İlan Ekleme Tamam'})
    })
})

var multer  = require('multer');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './images');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});
var upload = multer({storage: storage});
router.post('/upload',upload.single('file'),function(req, res, next) {
    console.log(req.file);
    if(!req.file) {
      res.status(500);
      return next(err);
    }
    res.json({ fileUrl: 'http://localhost:8080/images/' + req.file.filename });
  })

var ilan = {router};

module.exports = ilan