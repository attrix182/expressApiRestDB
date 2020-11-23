const express = require('express');

const app = express();

app.use(express.json());

const user = require('./user.js');



app.get('/', funciones.hi); //Test

app.post('/api/users', user.add); //Add user

app.get('/api/users', user.list); //Get Users

app.get('/api/users/:id', user.listID);  //Get user where ID


app.delete('/api/users/:id', user.deleteID); //Delete user for id


app.put('/api/users/:id', user.modID); //Moddify user for id


const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Test listen ${port} `))