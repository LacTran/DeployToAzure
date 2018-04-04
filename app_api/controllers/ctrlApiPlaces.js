const mongoose = require('mongoose');


const placeModel = mongoose.model('place');

const placeList = function (req,res) {

    placeModel.find({}, function (err,places) {

        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(places);
        }

    })

};


const addPlace = function (req,res) {


    placeModel.create(req.body, function (err,newPlace) {

        if (err) {
            res.status(404).json(err);
        }
        else{
            res.status(201).json(newPlace);
        }

    })

};

module.exports = {
    placeList,
    addPlace
};