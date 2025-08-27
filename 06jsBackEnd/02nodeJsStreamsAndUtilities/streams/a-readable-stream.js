import { log } from 'node:console';
import fs from 'node:fs';

const readStream = fs.createReadStream('./input.txt', { encoding: 'utf-8', highWaterMark: 1000 });

readStream.on('data', function (chunk) {
    console.log('-------- NEW CHUNK --------------');
    log(chunk)
});

readStream.on('end', function() {
    console.log('--------- READ STREAM ENDED ----------');
});
