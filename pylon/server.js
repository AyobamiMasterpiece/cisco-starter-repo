const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(55450);
const wsServer = new webSocketServer({ httpServer: server });

wsServer.on('request', function (request) {
    console.log('Establishing a new connection with client');
    var connection = request.accept(null, request.origin);
    setInterval(() => {
        connection.sendUTF(new Date().getTime().toString()); // Convert the timestamp to a string
    }, 100);
});
