module.exports = function(app) {
    app.get('/', (req,res) => {
      app.render('home');
    });
  
module.exports = function(app){
    app.get('/detail',(req,res) =>{
        app.render('detail');
    })
}
  };