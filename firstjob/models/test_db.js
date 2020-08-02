const music_test = require('../models/music');

// Guitar.find({}, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         return
//     }
// });
/*music_test.find({}).lean()
  .then((music_test) => {
    console.log(music_test);
  })
  .catch(err => next(err))*/


  app.get('/', (req, res, next) => {
    return music_test.find({}).lean()
      .then((music_test) => {
          res.render('home', { music_test });
      })
      .catch(err => next(err));
  });