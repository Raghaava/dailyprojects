const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.DB_URI;

const connectToDB = (emitter) => { 
mongoose.connect(DB_URI, {useCreateIndex: true, useNewUrlParser: true})
.then(console.log("Mongoose default connection is open."))
.catch(err => console.log(`Mongoose default connection is not established due to ${err}`))


process.on('SIGINT', () => mongoose.connection.close(() => {
  console.log("Mongoose default connection is disconnected due to application termination");
  process.exit(0);
}));

emitter.emit('db.ready');
}

module.exports = {connectToDB};