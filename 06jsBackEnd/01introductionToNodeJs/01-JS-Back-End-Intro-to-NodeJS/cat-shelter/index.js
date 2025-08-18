import http from 'http';
import { log } from 'console';

import homePageTemplate from './views/index.html.js';
import addCatTemplate from './views/addCat.html.js';
import addBreedTemplate from './views/addBreed.html.js';
import siteCss from './content/styles/site.css.js';
import cats from './catsData.js';

const server = http.createServer((req, res) => {
    log(req.url)

    if (req.url === '/content/styles/site.css') {
        res.writeHead(200, {
            "content-type": 'text/css'
        });
        res.write(siteCss);

        return res.end();
    }

    res.writeHead(200, {
        'content-type': 'text/html' // Mime type
    });

    switch (req.url) {
        case '/':
            res.write(homePageTemplate(cats));
            break;
        case '/cats/add-cat':
            res.write(addCatTemplate());
            break;
        case '/cats/add-breed':
            res.write(addBreedTemplate());
            break;
    }

    res.end();
});

server.listen(5000);
console.log('Server is listening on http://localhost:5000...');

