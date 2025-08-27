import http from 'node:http'
import './init.js';
import eventEmitter from './pubSub.js';

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/deposit':
            eventEmitter.emit('deposit', 'Deposit Info')
            
            res.write('Deposit money');
            break;
        case '/withdraw':
            eventEmitter.emit('withdraw', 'Withdraw money')

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
