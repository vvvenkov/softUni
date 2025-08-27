import fs from 'node:fs';
import zlib from 'node:zlib';

const readStream = fs.createReadStream('./input.txt', { encoding: 'utf-8', highWaterMark: 1000 });
const gzip = zlib.createGzip();
const writeStream = fs.createWriteStream('./input-transformed.txt', { encoding: 'utf-8' });

readStream.pipe(gzip).pipe(writeStream);
