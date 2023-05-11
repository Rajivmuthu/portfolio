const express = require("express");
app=express()
var cors = require('cors')
app.use(cors())
 
app.use(express.json())

                                              //mysql node-using this website to get this connect db and server code.
var mysql      = require('mysql');
const { log } = require("console");
var connection = mysql.createConnection({
  host     : 'localhost',//host
  user     : 'root', //our db user name
  password : 'Password@123',//db password
  database : 'contact'//db name
});

app.post('/insert1',((req,res)=>
{
    connection.query(`insert into contact_details(Client_name,email,subjects,message) values('${req.body.Client_name}','${req.body.email}','${req.body.subjects}','${req.body.message}')`,function(error,results){
    if (error){
        console.log(error);
    }
    console.log('The solution is: ',results);
    res.json(results)
})
}
))

app.get('/',((req,res)=>{
    
    connection.query(`SELECT * from contact_details`, function (error, results) {
        if (error){
            console.log(error);
        }
        // console.log('The solution is: ',results);
   
        // connection.end();
        res.json(results)
      });
    }));


    app.put('/update',((req,res)=>
    {
        connection.query(`update contact_details set Client_name='${req.body.Client_name}',email='${req.body.email}',subjects='${req.body.subjects}',message='${req.body.message}' where id='${req.body.id}'`,function(error,results){
        if (error){
            console.log(error);
        }
        console.log('The solution is: ',results);
        res.json(results)
    })
    }
    ))


app.listen(5000,()=>{
    console.log("Listening on port 5000");
})