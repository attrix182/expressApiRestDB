const user = {};

var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'merceriabd'
});

user.list = (req, res) => {

    const sql = 'SELECT * FROM usuarios'

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('no results')
        }

    })

};

user.listID = (req, res) => {


    const {id }= req.params;
    const sql = `SELECT * FROM usuarios WHERE ID = ${id}`

    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('no results')
        }

    })

};


user.add = (req, res) => {


    const {id }= req.params;
    const sql = 'INSERT INTO usuarios WHERE SET ?'

    const newUser = {
       
        correo: req.body.name,
        clave: req.body.clave,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        perfil: req.body.perfil,
        foto: req.body.foto

    }


    connection.query(sql, (error, results) => {
        if (error) throw error;
        if (results.length > 0) {
            res.json(results);
        } else {
            res.send('no results')
        }

    })

};



module.exports = user;