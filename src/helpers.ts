import https from 'https';
import { IncomingMessage } from 'http';

export const GetFromMovedUrl = (url: string) => new Promise<string>((resolve, reject) => {
  https
      .get(url, (res) => {
          if (res.statusCode === 302) {
              resolve(res.headers.location);
          } else {
              reject('Get another code');
          }
      })
      .on('error', reject);
});

export const Get = (url: string) => new Promise<IncomingMessage>((resolve, reject) => {
  https
      .get(url, resolve)
      .on('error', reject);
});