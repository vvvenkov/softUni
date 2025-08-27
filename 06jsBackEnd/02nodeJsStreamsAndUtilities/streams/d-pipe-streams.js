import fs from 'node:fs';

const readStream = fs.createReadStream('./input.txt', { encoding: 'utf-8', highWaterMark: 1000 });
const writeStream = fs.createWriteStream('./input-copy.txt', { encoding: 'utf-8' });

readStream.pipe(writeStream);
