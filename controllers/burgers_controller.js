var express = require('express');
var app = express();
var burger = require('../models/burger.js');


app.get('/', function (req, res) 
{
  res.redirect('/index');
});
 
app.get('/index', function (req, res) 
{
  burger.selectAll(function(data) 
  {
    var burgAll = { burgers: data };
    res.render('index', burgAll);
  });
});

app.post('/burger/create', function (req, res) 
{
  burger.insertOne(req.body.burger_name, function() {
    res.redirect('/index');
  });
});

app.post('/burger/eat/:id', function (req, res) 
{
  burger.updateOne(req.params.id, function() 
  {
    res.redirect('/index');
  });
});

// Export routes
module.exports = app;