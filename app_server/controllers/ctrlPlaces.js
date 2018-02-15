
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
module.exports = {
    placelist
};