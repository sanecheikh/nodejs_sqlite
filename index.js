const sqlite3 = require('sqlite3').verbose();
const dbname ='univers.db';
 
let db = new sqlite3.Database(dbname,(err)=>{
    if (err) throw err;
    console.log("base de donnee initialise dans le fichier :"
    +dbname);
});
//db.run('CREATE TABLE IF NOT EXISTS planetes(name varchar(25));' );

db.run( "INSERT INTO planetes(name) values (?)",["Mars"]);
db.run( "INSERT INTO planetes(name) values (?)",["pluton"]);
db.run( "INSERT INTO planetes(name) values (?)",["Terre"]);
db.run( "INSERT INTO planetes(name) values (?)",["Jupiter"]);
db.run( "INSERT INTO planetes(name) values (?)",["Mercure"]);



//db.all("SELECT rowid,* FROM planetes",(err, data)=>{
    //if(err) throw  err;
    //console.log(data);
 //} );

 db.run("DELETE FROM planetes WHERE 'name'= 'pluton' ",(err, data)=>{
    if(err) throw  err;
    console.log(data);
 } );