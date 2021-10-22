const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
    const queryObject = req.query;

    let temperatura = "La temperatura es: ";

    if (queryObject.ciudad === 'buenosaires') {
        temperatura += '18C';
    } else if (queryObject.ciudad === 'ecuador') {
        temperatura += '35C';
    }

    res.send(temperatura)
})
 
app.listen(8080)