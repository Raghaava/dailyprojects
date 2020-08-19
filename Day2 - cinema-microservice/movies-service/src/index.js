const {EventEmitter} =  require('events');
const {connectToDB} = require('./config/mongo');

const emitter = new EventEmitter();

emitter.on('db.ready', () => console.log('we are ready'));

connectToDB(emitter);