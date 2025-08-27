import fs from 'node:fs/promises'

await fs.writeFile('./output.txt', 'Az sym bylgarche obicham', { encoding: 'utf-8' });

