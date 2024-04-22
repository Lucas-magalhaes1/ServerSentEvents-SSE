const http = require('http');
const fs = require('fs');

let visitorCount = 0;
let clients = [];

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
});

server.on('request', (req, res) => {
    if (req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

     
        clients.push(res);

      
        req.on('close', () => {
            clients = clients.filter(client => client !== res);
        });
    }
});

setInterval(() => {
    visitorCount++;
    clients.forEach(client => {
        client.write(`data: ${visitorCount}\n\n`);
    });
}, 1000);

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

