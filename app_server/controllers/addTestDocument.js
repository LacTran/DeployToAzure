
db.dropDatabase();

db.place.save(
    [
        {name:'Vung Tau', region: 'Southern'},
        {name:'Nha Trang', region: 'Southeast'},
        {name:'Da Lat', region: 'Southern'},
        {name:'Sa Pa', region: 'Northern'},
        {name:'Da Nang', region: 'Middle'},
        {name:'Phan Thiet', region: 'Southeast'},
        {name:'Lao Cai', region: 'Northern'}
    ]
);

db.time.save(
    [
        {place:'Vung Tau',time:'spring' , region: 'Southern'},
        {place:'Nha Trang',time:'winter' ,  region: 'Southeast'},
        {place:'Da Lat',time:'autumn' ,  region: 'Southern'},
        {place:'Sa Pa',time:'spring' ,  region: 'Northern'},
        {place:'Da Nang',time:'winter' ,  region: 'Middle'},
        {place:'Phan Thiet',time:'winter' ,  region: 'Southeast'},
        {place:'Lao Cai',time:'autumn' ,  region: 'Northern'}
    ]
);