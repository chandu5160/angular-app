var mysql=require('mysql');

var connection=mysql.createConnection({
    host:"192.168.20.171",
    user:"chandrasekhara",
    port:3306,
    password:"chandrasekhara",
    database:"chandrasekhara"
});
connection.connect(function(err){
    if(err){
        console.log(err);
    } 
});

module.exports=connection;