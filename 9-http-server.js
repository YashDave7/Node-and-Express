const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead('200',{'Content-Type': 'text/plain'});
        res.write("HomePage");
        res.end();
    }
    if(req.url === '/about') {
        res.writeHead('200',{'Content-Type': 'text/plain'});
        res.write("AboutPage");
        res.end();
    }
    if(req.url === '/contact') {
        res.writeHead('200',{'Content-Type': 'text/plain'});
        res.write("ContactPage");
        res.end();
    }
    res.writeHead('404',{'content-Type': 'plain/html'});
    res.write('<h2>ERROR 404 - Page Not Found</h2>');
    res.end();
});

server.listen(8000);