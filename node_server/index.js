const express=require('express');
const conn=require("./config.js");
const cors=require('cors');

const apk=express();
apk.use(express.json());
apk.use(cors());

apk.post('/employee_info',(req,resp)=>{
    
    const usern=req.body.ausern;
    const jobt=req.body.ajobt;
    const phone1=req.body.aphone1
    const addr=req.body.aaddr;
    const city=req.body.acity;
    const state=req.body.astate;
    const priEmCon=req.body.apriEmCon;
    const phone2=req.body.aphone2;
    const relation=req.body.arelation;
   

    conn.query('INSERT INTO empinfotb (employee_Name, job_title, phoneN1, address, city, state, pri_emgy_contact, phoneN2, relationship) VALUES(?,?,?,?,?,?,?,?,?)',
    [usern,jobt,phone1,addr,city,state,priEmCon,phone2,relation],(err,result)=>{
        if(err){
            resp.send(err);
        }
        else{
            if(result){
                resp.send(result)
            }
            else{
                resp.send({sms:'Please Fill All Field'})
            }
        }

    })
})

apk.post('/employee_list',(req,resp)=>{

    conn.query('SELECT * FROM empinfotb',(err,result)=>{
        if(err){
            resp.send(err);
        }
        else{
            resp.send(result)
        }
    })
})

apk.post('/employee_name',(req,resp)=>{
    const name=req.body.ename
    conn.query('SELECT * FROM empinfotb where employee_Name =?',[name],(err,result)=>{
        if(err){
            resp.send(err)
        }else{
            resp.send(result)
        }
    })
})

apk.post('/employee_remove',(req,resp)=>{
    const epid=req.body.epid
    conn.query('DELETE FROM empinfotb where id =?',[epid],(err,result)=>{
        if(err){
            resp.send(err)
        }else{
            resp.send(result)
        }
    })
})

apk.post('/employee_get',(req,resp)=>{
    const eid=req.body.x
    conn.query('SELECT * FROM empinfotb where id =?',eid,(err,result)=>{
        if(err){
            resp.send(err)
        }else{
            resp.send(result)
        }
    })
})

apk.put('/employee_update',(req,resp)=>{
    
    const usern=req.body.ausern;
    const jobt=req.body.ajobt;
    const phone1=req.body.aphone1
    const addr=req.body.aaddr;
    const city=req.body.acity;
    const state=req.body.astate;
    const priEmCon=req.body.apriEmCon;
    const phone2=req.body.aphone2;
    const relation=req.body.arelation;
    const id=req.body.vid
   

    conn.query('update empinfotb set employee_Name=?, job_title=?, phoneN1=?, address=?, city=?, state=?, pri_emgy_contact=?, phoneN2=?, relationship=? where id=?',
    [usern,jobt,phone1,addr,city,state,priEmCon,phone2,relation,id],(err,result)=>{
        if(err){
            resp.send(err);
        }
        else{
            if(result){
                resp.send(result)
            }
            else{
                resp.send({sms:'Please Fill All Field'})
            }
        }

    })
})

apk.listen(5012,()=>{
    console.log("runing server")
});
