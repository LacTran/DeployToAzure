
const timelist = function(req, res){
    res.render('time',{
        times:
            [
                {place:'Vung Tau',time:'spring' , region: 'Southern'},
                {place:'Nha Trang',time:'winter' ,  region: 'Southeast'},
                {place:'Da Lat',time:'autumn' ,  region: 'Southern'},
                {place:'Sa Pa',time:'spring' ,  region: 'Northern'},
                {place:'Da Nang',time:'winter' ,  region: 'Middle'},
                {place:'Phan Thiet',time:'winter' ,  region: 'Southeast'},
                {place:'Lao Cai',time:'autumn' ,  region: 'Northern'}
            ]});
};
module.exports = {
    timelist
};