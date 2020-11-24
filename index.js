const express = require('express');

const app = express();

app.use(express.json());

const user = require('./user.js');


app.post('/api/users', user.add); //Add user

app.get('/api/users', user.list); //Get Users

app.get('/api/users/:id', user.listID);  //Get user where ID


app.delete('/api/users/:id', user.deleteID); //Delete user for id


app.put('/api/users/:id', user.modID); //Moddify user for id

var cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  var cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  app.get('/example/d', [cb0, cb1], function (req, res, next) {
    console.log('the response will be sent by the next function ...')
    next()
  }, function (req, res) {
    res.send('Hello from D!')
  })


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Test listen ${port} `))