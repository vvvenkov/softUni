import http from 'http';
import homePage from './views/index.html.js';
import siteCss from './content/styles/site.css.js'
import addCatHtml from './views/addCat.html.js';
import addBreedHtml from './views/addBreed.html.js';

const server = http.createServer((req, res) => {

    if (req.url === '/content/styles/site.css') {

        res.writeHead(200, {
            "content-type": "text/css"
        });
        res.write(siteCss);

        return res.end();
    };

    res.writeHead(200, {
        "content-type": "text/html" //Mime type
    });

    switch (req.url) {
        case '/':
            res.write(homePage)
            break;
        case '/cats/add-cat':
            res.write(addCatHtml)
            break;
        case '/cats/add-breed':
            res.write(addBreedHtml)
            break;
    }

    res.end();
});

server.listen(5000);
console.log('Server is listening on http://localhost:5000...')