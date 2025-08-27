import http from 'http';
import fs from 'node:fs/promises'

import homePageTemplate from './views/index.html.js';
import addCatTemplate from './views/addCat.html.js';
import addBreedTemplate from './views/addBreed.html.js';
import siteCss from './content/styles/site.css.js';

// Read cats
const cats = await readCats();

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/cats/add-cat') {
        let urlEncodedData = '';
        req.on('data', (chunk) => {
            urlEncodedData += chunk;
        });

        req.on('end', () => {
            const data = new URLSearchParams(urlEncodedData);
            const newCat = Object.fromEntries(data.entries());
            newCat.id = cats.length + 1;

            saveCat(newCat)
                .then(() => {
                    res.writeHead(301, {
                        'location': '/'
                    });
                    res.end();
                })
        });

        return;
    }

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

async function readCats() {
    const catsJSON = await fs.readFile('./cats.json', { encoding: 'utf-8' });
    const cats = JSON.parse(catsJSON);

    return cats;
}

async function saveCat(cat) {
    cats.push(cat);

    const catsResult = JSON.stringify(cats, null, 4);

    await fs.writeFile('./cats.json', catsResult, { encoding: 'utf-8' });
}

server.listen(5000);
console.log('Server is listening on http://localhost:5000...');

