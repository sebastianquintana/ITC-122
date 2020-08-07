let express = require('express')
let router = express.Router()
let datamusic = require('../data')
let mongoMusic = require('../models/music')
const { mongo } = require('mongoose')
const  getAllMusic = datamusic.getAll()
module.exports = router
router.use('/api', require('cors')());


router.get('/', (req, res,next) => {
    return mongoMusic.find({}).lean()
        .then((mongoMusic) => {
            res.render('home', { mongoMusic });
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
        res.render('detail',{artist:result, stats:mongoMusic});

    })
   });
   router.get('/api/music/', (req, res) => {
    const result = req.params.artist;
    mongoMusic.findOne({artist:result})
    .then((getDetail) => {
      if (getDetail ===null){
          return res.status(400).send(`error:"${result}" not found`)
      }else{
          res.json(getDetail)
      }
    })
     .catch.status(500).send('error ocurred: database problem',err)
   });
   
   router.post('/api/music', (req, res) => {
    const result = req.params.title;
    mongoMusic.findOneAndUpdate({title: result}, req.body, {upsert: true, new: true})
    .then(getDetail => {
        res.json(getDetail)
    })
    .catch(err => {
        res.status(500).send('Error occurred: dabatase error', err)
    })
})
    router.get('/delete', (req, res) => {
    const result = req.query.title;
    mongoMusic.findOneAndDelete({title: result}, (err, getDetail) => {
        //console.log(movie);
        if (err) {
            console.log(err);
        } else if (!getDetail) {
            console.log(result+ " not found");
            res.send(`${result} not found`);
        } else if (getDetail) {
            console.log(result + " delete successful");
            res.send(`${result} delete successful`);
        }
    });
});

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