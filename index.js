/*creating variable to get modules from data.js*/

const music = require("./data");

/*creating a var to get all the data from music*/
let playMusic = music.getAll();

/*creating switch to different case and default msg*/
const http = require("http");
http.createServer((req,res) =>{
    const path = req.url.toLowerCase();
    
    switch(path){
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Home page \n' + 'arraylenght:'+ playMusic.length);
            break;

        case 'about':
            res.writeHead(200,{'content-Type':'text/plain'});
            res.end('About page \n is about me Sebastian Quintana , \n I\'am in the web devolepment program and this is my 5th quarter and so far I gonna said this side of the devolping area is what im enjoying more');
            break;

        default:
            res.writeHead(404,{'content-Type': 'text/plain'});
            res.end('Not Found');
            break;


    }
}).listen(process.env.PORT || 3000);

