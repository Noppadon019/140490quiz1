var express = require('express');
var app = express();
var mysql = require('mysql');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('pages/index');
});

