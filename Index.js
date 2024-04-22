const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        });
    }
});

let visitorCount = 0;

server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// SSE endpoint
server.on('request', (req, res) => {
    if (req.url === '/events') {
        res.writeHead(200, {
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive'
        });

        
        const interval = setInterval(() => {
            res.write(`data: ${visitorCount}\n\n`);
        }, 1000);

       
        req.on('close', () => {
            clearInterval(interval);
        });
    }
});
