import { log } from 'node:console';
import fs from 'node:fs';
import fsPromise from 'node:fs/promises'

// Synchronous
console.log('Sync');
log(1);
const input = fs.readFileSync('./input.txt', { encoding: 'utf-8' });
console.log(input);
log(2);


// Async
console.log('Async');
console.log(1);
fs.readFile('./input.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
})
console.log(2);

// Promise
console.log('Promise');
console.log(1);
const text = await fsPromise.readFile('./input.txt', { encoding: 'utf-8' })
console.log(text);
console.log(2);





