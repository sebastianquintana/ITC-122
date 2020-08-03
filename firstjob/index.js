const express = require("express");
const bodyParser= require("body-parser");
const music = require("./data");

const app= express();

let exphbs = require("express-handlebars"); // should be at top of module
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");
app.set('port',process.env.PORT || 3000);
//app.use(express.static('index'));
//app.use('/css',express.static('css')); // set location for static files
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended: true})); // parse form submissions)

 
//const { Router } = require("express");



/*creating a var to get all the data from music*/
const playMusic = music.getAll();

// send static file as response
app.get('/', (req, res) => {
    res.type('text/html');
    res.render('home',{music:playMusic}); 
   });
   
app.get('/detail', (req, res) => {
    const result = playmusic.get(req.query.artist);
    res.render('detail', {artist: req.query.artist, playMusic:result });
});

app.get('/About', (req, res)=>{
    res.type('text/plain');
    res.send('About page \n is about me Sebastian Quintana , \n I\'am in the web devolepment program and this is my 5th quarter and so far I gonna said this side of the devolping area is what im enjoying more');

});
   // define 404 handler
   app.use( (req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
   });
   app.listen(app.get('port'),()=>{
       console.log('express started now')
   });









