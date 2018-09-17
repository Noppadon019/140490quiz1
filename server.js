var express = require('express');
var app = express();

var mysql = require('mysql');
var data;
var data2;
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  user     : 's140390',
  password : 'abc123**',
  database : 'db140390'
});

//app.use(express.static('static'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});

// Display all product

connection.connect()

connection.query('select * from students', function (err, rows, fields) {
       data = rows;
    
})

connection.query('select * from subjects', function (err, rows, fields) {
    data2 = rows;

})

connection.end()


app.get('/students', function (req, res) {
     
    res.render('pages/students', { students: data })
    
});


    app.get('/subjects', function (req, res) {

        res.render('pages/subjects', { subject: data2 })
    });
    
console.log('App is running at http://localhost:8080');


app.listen(8080);