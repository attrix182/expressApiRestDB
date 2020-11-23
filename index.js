const express = require('express');

const app = express();

app.use(express.json());

const funciones = require('./funciones.js');


const user = require('./user.js');



app.get('/', funciones.hi);

app.post('/api/users', funciones.add);

//app.get('/api/users', funciones.list);
app.get('/api/users', user.list);

//app.get('/api/users/:id', funciones.listID);

app.get('/api/users/:id', user.listID);


app.delete('/api/users/:id', funciones.deleteID);




const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Test listen ${port} `))