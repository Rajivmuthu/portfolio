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
  database : 'portfolio'//db name
});

app.post('/insertall',((req,res)=>
{
    connection.query(`insert into client_details(Cname,email,subjects,message) values('${req.body.Cname}','${req.body.email}','${req.body.subjects}','${req.body.message}')`,function(error,results){
    if (error){
        console.log(error);
    }
    console.log('The solution is: ',results);
    res.json(results)
})
}
))

app.get('/',((req,res)=>{
    
    connection.query(`SELECT * from client_details`, function (error, results) {
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
    connection.query(`update client_details set Cname='${req.body.Cname}',email='${req.body.email}',subjects='${req.body.subjects}',message='${req.body.message}' where id='${req.body.id}'`,function(error,results){
    if (error){
        console.log(error);
    }
    console.log('The solution is: ',results);
    res.json(results)
})
}
))

// app.get('/:id',((req,res)=>{
    
//     connection.query(`SELECT * from client_details where id=${req.params.id}`, function (error, results) {
//         if (error);
//         console.log('The solution is: ',results);
   
//         connection.end();
//     res.end(JSON.stringify(results))
//       });
//     }));
// app.listen(5000,()=>{
//     console.log("Listening on port 5000");
// })


app.listen(5000,()=>{
    console.log("Listening on port 5000");
})