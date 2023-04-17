const myspl=require('mysql');

const conn=myspl.createConnection({
    host:'localhost',
    user:"root",
    password:"root132@",
    database:"empinfodb"
});
module.exports=conn;

conn.connect((err)=>{
    if(err){
        console.warn('error')
    }
    else{
        console.warn('connected')
    }
})