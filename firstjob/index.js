let express = require("express");
let app= express();
let bodyParser= require("body-parser");
const PORT = process.env.PORT || 3000
let newMusicRoute = require('./routes/musicroutes');
//let newDatamRoutes = require('./routes/datamroutes')
let exphbs = require("express-handlebars"); // should be at top of module
app.engine('handlebars', exphbs({defaultLayout: false}));
app.set("view engine", "handlebars");
app.use(bodyParser.json())
app.use(newMusicRoute)
//app.use(newDatamRoutes)

app.listen(PORT,() => console.info(`server has started on ${PORT}`));
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.urlencoded({extended: true})); // parse form submissions)
app.use('/api', require('cors')());



app.use( (req,res) => {
    res.type('text/plain'); 
    res.status(404).res.send('404 - Not found');
   });


