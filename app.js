var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var passport = require('passport');
var mongoose = require('mongoose');

var app = express();

app.listen(8888,() =>{
  console.log('Server starting on port 8888');
})
