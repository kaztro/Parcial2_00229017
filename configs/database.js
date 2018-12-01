const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:3000/cursoOnline');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Coneccion Establecida...');
});