import { log } from 'console';
import express from 'express';
import path from 'path';

const server = express();

// Add static middleware
server.use(express.static('./public'));

// Add global logging middleware
server.use((req, res, next) => {
    console.log(`Time: ${Date.now()} - Url: ${req.url} - Method: ${req.method}`)

    next();
});

// Add cat logging middleware | path specific middleware
server.use('/cats', (req, res, next) => {
    console.log('Log cat...');

    next();
});

server.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="/css/style.css" />
                <title>Express App</title>
            </head>
            <body>
                <h1>Hello from express!</h1>    
            </body>
        </html>
    `);
    res.end();
});

// Better use static middleware
// server.get('/css/style.css', (req, res) => {
//     res.sendFile(path.resolve('./public/css/style.css')); 
// });

server.get('/cats', (req, res) => {
    res.write('<h1>Cats Page!</h1>');
    res.end();
});

server.get('/cats/:catName', (req, res) => {
    const catName = req.params.catName;

    // Download as attachment
    if (catName === 'cute') {
        res.download('./cute.jpg');
    } else if (catName === 'navcho') {// send file inline
        res.sendFile(path.resolve('./cute.jpg'));
    } else {
        res.write(`<h1>Cat ${catName} Profile Page!</h1>`);
        res.end();
    }
});

// Two segment pathname
server.get('/dogs/favourites', (req, res, next) => {
    console.log('Route specific middleware');
    next();
}, (req, res) => {
    res.write('<h1>Favourite Dogs!</h1>');
    res.end();
});

// Partial wild card
server.get('/ab*cd', (req, res) => {
    res.write('<h1>ABCD!</h1>');
    res.end();
});

// Regexp path
server.get(/^\/age\/\d{2}$/, (req, res) => {
    res.write('<h1>Age Page</h1>');
    res.end();
});

// Return json data
server.get('/data', (req, res) => {
    res.json({ name: 'Navcho', age: 10 });
});

server.get('/path/old', (req, res) => {
    res.redirect('/path/new');
});

server.get('/path/new', (req, res) => {
    res.send('New Path Page');
});

// Wild card path
server.all('/*url', (req, res) => {
    // res.status(404);
    // res.write('<h1>404 | Not Found</h1>');
    // res.end();

    res.status(404).send('<h1>404 | Not Found</h1>');
});


server.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
