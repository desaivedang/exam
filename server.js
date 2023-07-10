const express = require('express')
const cors = require('cors')
const app = express()
const port = 4000

app.use(cors('*'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const mysql = require('mysql2')

mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "manager",
    database : "homework"
})

app.get("/",(request,response)=>{
    connection.query(`select b_name from Book_Tb where author=${request.body.author}`,(error,result)=>{
        if (error==null) {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } else {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

app.post("/",(request,response)=>{

    var query = `insert into Book_tb values
                        (${request.body.id},'${request.body.bname}','${request.body.author}',
                        '${request.body.book_type}','${request.body.price}',
                        '${request.body.publisheddate}','${request.body.lang}')`;

    connection.query(query,(error,result)=>{
        if (error==null) {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } else {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})

app.put("/",(request,response)=>{

    var query = `update Book_tb set price=${request.body.price}, lang=${request.body.lang}
                    where id=${request.body.id}`;

    connection.query(query,(error,result)=>{
        if (error==null) {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.write(data);
        } else {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})