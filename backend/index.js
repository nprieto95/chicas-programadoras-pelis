const http = require('http');
const url = require('url');

const requestListener = function (req, res) {
    const queryObject = url.parse(req.url, true).query;

    let temperatura = "La temperatura es: ";

    if (queryObject.ciudad === 'buenosaires') {
        temperatura += '18C';
    } else if (queryObject.ciudad === 'ecuador') {
        temperatura += '35C';
    }

    res.writeHead(200);
    res.end(temperatura);
}

const server = http.createServer(requestListener);
server.listen(8080);