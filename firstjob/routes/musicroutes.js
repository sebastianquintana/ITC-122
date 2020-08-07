let express = require('express')
let router = express.Router()
let datamusic = require('../data')
let mongoMusic = require('../models/music')
const { mongo } = require('mongoose')
const  getAllMusic = datamusic.getAll()
module.exports = router
router.use('/api', require('cors')());


router.get('/', (req, res) => {
    return mongoMusic.find({}).lean()
        .then((mongoMusic) => {
            res.render('home', { music:mongoMusic });
        })
        .catch(err => next(err));
})
router.get('/api/music', (req, res) => {
    return mongoMusic.find({})
    .then((mongoMusic) => {
        res.json(mongoMusic)
    })
    .catch(err => {
        res.status(500).send('Error occurred: dabatase error')})
})
   router.get('/detail', (req, res) => {
    const result = req.query.artist;
    mongoMusic.findOne({artist:result}).lean()
    .then((mongoMusic) => {
        res.render('detail',{artist:result, stats:mongoMusic})

    })
   });
   router.get('/api/datail',(req,res)=>{
       const result= req.params.artist;
       mongoMusic.findOne({artist:result}).lean()
       .then((mongoMusic) =>{
           res.render('detail',{artist:result, stats:mongoMusic})
       })
   })
   router.post('/api/newRecord', (req,res) => {
    if(!req.body) {
        return res.status(400)
     }
     
     let model = new mongoMusic(req,body)
     model.save()
     .then(doc =>{
         if(!doc || doc.length === 0){
             return res.status(404)
         }
         res.status(201).res(doc)
     })
     .catch(err =>{
         res.status(404).json(err)
     })
 })

router.get('/About', (req, res)=>{
    res.type('text/plain');
    res.send('About page \n is about me Sebastian Quintana , \n I\'am in the web devolepment program and this is my 5th quarter and so far I gonna said this side of the devolping area is what im enjoying more');
});
router.use( (req,res) => {
    res.type('text/plain'); 
    res.status(404).res.send('404 - Not found');
   });
router.get(router.get('Port'),()=>{
       console.log('express started now')
   });


