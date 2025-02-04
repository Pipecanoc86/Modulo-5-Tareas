import http from 'http';
import fs from 'fs'
import handleRequest from './routes/router.js';

const server = http.createServer((req, res) => {
    handleRequest(req, res)
    //res.writeHead(200, { 'Content-Type': 'text/plain' });
    //res.end('Hello, cabezon, Prueba de puerto por postman');
    //console.log(req.url);
    //console.log(req.method);
})

server.listen(3002, () => {
    console.log('Server is running on port 3002')
})


