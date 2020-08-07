const mongoose = require('mongoose');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
const credentials = require('../models/credentials');


// local db connection settings 
// const ip = process.env.ip || '127.0.0.1';
// const connectionString = 'mongodb://' +ip+ '/<DB_NAME>';

mongoose.connect(credentials.connectionString, { dbName: "datamusic", useNewUrlParser: true }); 

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define music model in JSON key/value pairs
// values indicate the data type of each key
const mySchema = mongoose.Schema({
 brand: { type: String, required: true },
 artist: String,
 album: String,
 Year: String,
 genre: String
}); 

module.exports = mongoose.model('datamroutes',mySchema, 'music');



