const http = require('http');

const requestListener = function (req, res) {
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
        },
    ];

    res.writeHead(200);
    res.end(JSON.stringify(result));
}

const server = http.createServer(requestListener);
server.listen(8080);