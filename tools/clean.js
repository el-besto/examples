import del from 'del';
import fs from './lib/fs';

async function clean() {
    await del(['build/*', '!build/.git'], {dot: true});
    await fs.mkdir('build');
}

export default clean;
