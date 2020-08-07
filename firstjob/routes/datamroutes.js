/*/let mongoMusic = require('../models/music')
let express = require('express')
let router = express.Router()

//POST method  create a new record

router.post('/newRecord', (req,res) => {
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

module.exports = router*/
