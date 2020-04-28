const myconnection= require('pg');


const mysqlConnection = myconnection.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'colection_movie'
});

mysqlConnection.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    else{
        console.log('Database was connected successfully');
    }
});

module.exports = myConnection;