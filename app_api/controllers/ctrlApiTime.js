const mongoose = require('mongoose');


const timeModel = mongoose.model('time');

const timeList = function (req,res) {

    timeModel.find({}, function (err,time) {

        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(time);
        }

    })

};


const addTime = function (req,res) {

    timeModel.create(req.body, function (err,newTime) {

        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(201).json(newTime);
        }

    })

};

module.exports = {
    timeList,
    addTime
};