const request = require('request');
const apiURL = require('./apiURL');


const placelist = function(req, res){
    res.render('place',{
        places:
            [
                {name:'Vung Tau', region: 'Southern'},
                {name:'Nha Trang', region: 'Southeast'},
                {name:'Da Lat', region: 'Southern'},
                {name:'Sa Pa', region: 'Northern'},
                {name:'Da Nang', region: 'Middle'},
                {name:'Phan Thiet', region: 'Southeast'},
                {name:'Lao Cai', region: 'Northern'}
            ]});
};

const showForm = function(req, res) {
    res.render('place_add');
};
const addData = function(req, res) {
    const path = 'api/place';

    const postdata = {
        name: req.body.name,
        region: req.body.region
    };

    const requestOptions = {
        url: apiURL.server + path,
        method : 'POST',
        json: postdata
    };

    request(
        requestOptions,
        function (err, response) {
            if (response.statusCode === 201){
                res.redirect('/place')
            } else {
                res.render('error', {message: 'Error adding data: ' +
                response.statusMessage +
                ' (' + response.statusCode + ')' });
            }
        }
    )

};


module.exports = {
    placelist,
    showForm,
    addData
};