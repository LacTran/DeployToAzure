const mongoose = require('mongoose');

const dbURI = 'mongodb://trangialac.fin:Comlgkmst1@ds227939.mlab.com:27939/travel';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
   console.log("Mongoose connected to '{dbURI}'");

});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error', err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');