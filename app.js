const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport-jwt');
const mongoose = require('mongoose');
const config = require('./config/database');

/*Database connection*/
mongoose.connect(config.database);

mongoose.connection.on('connected',()=>{
  console.log('Connected to db' + config.database);
});

mongoose.connection.on('erorr',(err)=>{
  console.log('database error: '+err);
});
/*End Database connection*/

const app = express();

const users = require('./routes/users');

/*CORS middleware*/
app.use(cors());

/*wefew*/
app.use(express.static(path.join(__dirname,'public')));

/*bodyParser*/
app.use(bodyParser.json());

/*Index route*/
app.get('/',(req,res) => {
  res.send('Invalid endpoit');
});

app.use('/users',users);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen(8888,() =>{
  console.log('Server starting on port 8888');
})
