const funciones = {};

const users = [

    { id: 1, name: 'user1' },
    { id: 2, name: 'user2' },
    { id: 3, name: 'user3' },
];

funciones.hi = (req, res) => {
    res.send('Hello Express World!');


};

funciones.list = (req, res) => {
    res.send(users);
};


funciones.add = (req, res) => {

    const user = {
        id: users.length + 1,
        name: req.body.name,
    };

    users.push(user);
    res.send(users);

};

funciones.listID = (req, res) => {

    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send("User NOT FOUND")
    res.send(user);
    
};


funciones.deleteID = (req, res) => {

    const user = users.find(c => c.id === parseInt(req.params.id));
    if (!user) res.status(404).send("User NOT FOUND")

    users.splice(user);

    res.send(user);


};

module.exports = funciones;