import http from 'node:http'
import { publish } from './pubSub.js';
import './init.js';

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/deposit':
            publish('deposit', 'Deposit Info');
            
            res.write('Deposit money');
            break;
        case '/withdraw':
            publish('withdraw', 'Withdraw money');

            res.write('Withdraw money');
            break;
        default:
            res.writeHead(200, {
                'content-type': 'text/html'
            });
            res.write(`
                <h1>Online Bank</h1>    
                <a href="/deposit">Deposit</a>
                <a href="/withdraw">Withdraw</a>
            `);
            break;
    }

    res.end();
});

server.listen(5000, () => console.log('Server is listening on http://localhost:5000'));
