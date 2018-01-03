var mongoose = require( 'mongoose' );
var dbURI = 'mongodb://localhost/Loc8r';
mongoose.connect(dbURI);
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
var gracefulShutdown = function(msg,callback){
  mongoose.connection.close(function(){
    console.log('Mongoose discconnected through '+msg);
  });
}

//On nodemon restart
process.once('SIGUSR2', function () {
  gracefulShutdown('nodemon restart', function () {
    process.kill(process.pid, 'SIGUSR2');
  });
});

//on standard shutdown
process.on('SIGINT', function () {
  gracefulShutdown('app termination', function () {
    process.exit(0);
  });
});

//on heroku app shutdown
process.on('SIGTERM', function() {
  gracefulShutdown('Heroku app shutdown', function () {
    process.exit(0);
  });
});
//events based on connection to mongodb
mongoose.connection.on('connected', function () {
console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
console.log('Mongoose connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
console.log('Mongoose disconnected');
});

require('./locations');
