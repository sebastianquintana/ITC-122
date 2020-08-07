const music_test = require('../models/music');

// Guitar.find({}, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         return
//     }
// });
music_test.find({}).lean()
  .then((result) => {
    console.log(result);
  })
  .catch(err => next(err))