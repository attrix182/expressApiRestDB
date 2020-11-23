const user = {};

var mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'expressdb' //Name DB
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


    const { id } = req.params;
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

    const sql = 'INSERT INTO usuarios SET ?'

    const newUser = {

        correo: req.body.correo,
        clave: req.body.clave,
        nombre: req.body.nombre,
        apellido: req.body.apellido,

    }


    connection.query(sql, newUser, error => {
        if (error) throw error;

        res.send('Usuario Agregado')
    });


};


user.deleteID = (req, res) => {


    const { id } = req.params;
    const sql = `DELETE FROM usuarios WHERE ID = ${id}`

    connection.query(sql, (error, results) => {
        if (error) throw error;

        res.send('Usuario eliminado')


    })

};

user.modID = (req, res) => {


    const { id } = req.params;
    const { nombre, correo, apellido, clave } = req.body;
    const sql = `UPDATE usuarios SET correo = '${correo}', clave = '${clave}', nombre = '${nombre}', apellido = '${apellido}' WHERE id = '${id}'`

    connection.query(sql, (error, results) => {
        if (error) throw error;

        res.send('Usuario modificado')


    })

};




module.exports = user;