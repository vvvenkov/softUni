import http from 'http'; // Core Node.js Module

const server = http.createServer(function(req, res) {
    console.log('New HTTP Request!');
    res.write('Hello World!');
    res.end();
});

server.listen(5000);
console.log('Server is running on http://localhost:5000...');
