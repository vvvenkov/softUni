import fs from 'node:fs';
import zlib from 'node:zlib';

const readStream = fs.createReadStream('./input-transformed.txt', { highWaterMark: 1000 });
const gunzip = zlib.createGunzip();
const writeStream = fs.createWriteStream('./input-decompressed.txt', { encoding: 'utf-8' });

readStream.pipe(gunzip).pipe(writeStream);
