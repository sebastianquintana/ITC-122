'use strict'
const express = require("express");
const bodyParser= require("body-parser");
const music = require("./data");
/*var routes = require('./routes.js')(app); // pass ‘app’ instance to the routes module*/



const app= express();


app.set('port',process.env.PORT || 3000);
app.use(express.static('index'));
app.use('/css',express.static('css')); // set location for static files
app.use(bodyParser.urlencoded({extended: true})); // parse form submissions)

let exphbs = require("express-handlebars"); // should be at top of module 

app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");

/*creating a var to get all the data from music*/
let playMusic = music.getAll();

// send static file as response
app.get('/', (req, res) => {
    res.type('text/html');
    res.sendFile('home',{music:playMusic}); 
   });
   
app.get('/detail', (req, res) => {
    const musicartist = req.query.artist
    res.render('detail', {artist:musicartist, stats: music.getDetail(musicartist)});
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
   app.listen(app.get('PORT'),()=>{
       console.log('express started now')
   });









