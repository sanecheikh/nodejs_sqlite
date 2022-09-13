const sqlite3 = require('sqlite3').verbose();
const dbname ='univers.db';
 
let db = new sqlite3.Database(dbname,(err)=>{
    if (err) throw err;
    console.log("base de donnee initialise dans le fichier :"
    +dbname);
});
// db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), size VARCHAR(255),created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL);');

/* db.run( "INSERT INTO planetes(name,size) values (?,?)",["Mars ","7586454"]);
db.run( "INSERT INTO planetes(name,size) values (?,?)",["pluton","213255"]);
db.run( "INSERT INTO planetes(name,size) values(?,?)",["Terre","6352555"]);
db.run( "INSERT INTO planetes(name,size) values  (?,?)",["Jupiter","955222"]);
db.run( "INSERT INTO planetes(name,size) values  (?,?)",["Mercure","122565"]);
  */
//db.run("drop table planetes");
/* 
db.all("SELECT rowid,* FROM planetes",(err, data)=>{
    if(err) throw  err;
    console.log(data);
} ); */

db.each("SELECT rowid,* FROM planetes",(err, data)=>{
    if(err) throw  err;
    console.log(data);
} );
 /* db.run("DELETE FROM planetes WHERE 'name'= 'pluton' ",(err, data)=>{
    if(err) throw  err;
    console.log(data);
 } ); */