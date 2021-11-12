const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    const result = [
        {
            id: 1,
            dni: 36696888,
            nombre: 'Lionel',
            apellido: 'Messi',
            edad: 34
        },
        {
            id: 2,
            dni: 36696818,
            nombre: 'Sergio',
            apellido: 'Aguero',
            edad: 32
        }
    ];
    res.send(result);
})
 
app.listen(8080)