const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    const baseUrl = 'http://localhost:4000';
    const parseUrl = new URL(req.url, baseUrl);

    if (req.url === '/') {
        fs.readFile('./public/index.html', 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'content-type': 'text/plain' })
                res.end("error occurred");
            } else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(data);
            }
        });
    }
    else if (req.url === '/about') {
        fs.readFile('./public/about.html', 'utf-8', (err, data) => {
            if (err) {
                res.end("error occurred");
            } else {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url.startsWith('/user')) {
        const params = parseUrl.searchParams;
        const data = {
            name: params.get("name") || 'Guest',
            age: params.get("age") || 'Unknown'
        };

        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify(data));
    }
    else {
        res.writeHead(404, { 'content-type': 'text/html' });
        res.end('<h1>404 Page Not Found</h1>');
    }
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
