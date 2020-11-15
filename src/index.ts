import https from 'https';
import path from 'path';
import fs from 'fs';
import downloadFile from './downloadFile';

const [ url, downloadDir] = process.argv.slice(2);

console.log("url", url);
console.log("downloadDir", downloadDir);

if(!fs.existsSync(path.resolve(downloadDir))) {
    fs.mkdirSync(path.resolve(downloadDir));
}

downloadFile(url, downloadDir);
