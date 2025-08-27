import { log } from 'node:console';
import fs from 'node:fs/promises'

const dirContent = await fs.readdir('./');
log(dirContent);

