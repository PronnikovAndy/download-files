import path from 'path';
import fs from 'fs';
import { Get, GetFromMovedUrl } from './helpers';

export default async (url: string, downloadDir: string) => {
    try {
        const unfUrl = await GetFromMovedUrl(url);
        const urlForDownload = await GetFromMovedUrl(unfUrl.replace('downloads', 'unfurl'));
        const response = await Get(urlForDownload);

        const contentType = response.headers["content-type"];
        const fileExtension = contentType ? contentType.split(";")[0].split("/")[1] : 'jpeg';

        const fileStream = fs.createWriteStream(path.resolve(downloadDir, "photo" + `.${fileExtension}`));
        response.pipe(fileStream);

        fileStream.on("error", (err) => {
            console.error("Stream error", err.message);
        });

        fileStream.on("finish", () => {
            fileStream.close();
            console.log('Done!');
        });
    } catch (error) {
        console.log('error', error);
    }
}