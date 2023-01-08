const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.end('Home');
    }
    if(req.url === '/about') {
        res.end('about');
    }

    // res.write("Server");
    // res.end(`
    // <a href="/">back to home</a>
    // `);
});

server.listen(8000);
