var express = require('express');
var path = require('path');
var processor = require('./index');
var app = express();

console.log(processor.md5("12asdaeqqeqweqwe"));


var server = app.listen(3001, function () {
var host = server.address().address;
var port = server.address().port;
});