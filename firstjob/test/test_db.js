const music = require('../models/music');

// Guitar.find({}, (err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     else{
//         return
//     }
// });
music.find({}).lean()
  .then((music) => {
    console.log(music);
  })
  .catch(err => next(err))