import fs from 'node:fs';
import os from 'node:os';

const writeStream = fs.createWriteStream('./output.txt', { flags: 'a', encoding: 'utf-8'});

writeStream.write(os.EOL);
writeStream.write('First Line');
writeStream.write(os.EOL);
writeStream.write('Second Line');

writeStream.end();
