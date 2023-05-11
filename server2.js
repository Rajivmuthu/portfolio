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
  database : 'portfolio1'//db name
});

// ...............................insert data in database..........................
app.post('/insertall1',((req,res)=>
{
    connection.query(`insert into user_details(fname,email,subjects,message) values('${req.body.fname}','${req.body.email}','${req.body.subjects}','${req.body.message}')`,function(error,results){
    if (error){
        console.log(error);
    }
    console.log('The solution is: ',results);
    res.json(results)
})
}
))

// ......................................getall the data in table.............
app.get('/getall1',((req,res)=>{
    
    connection.query(`SELECT * from user_details where is_active = 1`, function (error, results) {
        if (error){
            console.log(error);
        }
        // console.log('The solution is: ',results);
   
        // connection.end();
        res.json(results)
      });
    }));

// ...............................................update data in database.............
app.put('/update1',((req,res)=>
{
    connection.query(`update user_details set fname='${req.body.fname}',email='${req.body.email}',subjects='${req.body.subjects}',message='${req.body.message}' where id='${req.body.id}'`,function(error,results){
    if (error){
        console.log(error);
    }
    console.log('The solution is: ',results);
    res.json(results)
})
}
))

// ....................................delete the row using isactive.......................................
app.put('/delete1',((req,res)=>
{
    connection.query(`update user_details set is_active = ${req.body.is_active} where id=${req.body.id}`,function (error,results){
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