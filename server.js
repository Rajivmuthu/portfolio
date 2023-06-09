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
// ...............................insert data in database..........................
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
// ......................................getall the data in table.............
app.get('/getall',((req,res)=>{
    
    connection.query(`SELECT * from client_details where is_active = 1`, function (error, results) {
        if (error){
            console.log(error);
        }
        // console.log('The solution is: ',results);
   
        // connection.end();
        res.json(results)
      });
    }));
// ...............................................update data in database.............
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


// ....................................delete the row using isactive.......................................
    app.put('/delete',((req,res)=>
    {
        connection.query(`update client_details set is_active=${req.body.is_active} where id=${req.body.id}`,function (error,results){
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


