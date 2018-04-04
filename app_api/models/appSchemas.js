const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({name:String, region:String});
const timeSchema = new mongoose.Schema({place:String, time:String, region:String});

mongoose.model('place', placeSchema,'place');
mongoose.model('time', timeSchema,'time');

