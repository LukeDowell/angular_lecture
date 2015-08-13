var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var app = express();

mongoose.connect('mongodb://localhost/angular_lecture');
app.use(bodyParser.json());
app.use('/', index);
app.set("port", (process.env.PORT || 5000));

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;

