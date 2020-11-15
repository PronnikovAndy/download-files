"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Get = exports.GetFromMovedUrl = void 0;
var https_1 = __importDefault(require("https"));
exports.GetFromMovedUrl = function (url) { return new Promise(function (resolve, reject) {
    https_1.default
        .get(url, function (res) {
        if (res.statusCode === 302) {
            resolve(res.headers.location);
        }
        else {
            reject('Get another code');
        }
    })
        .on('error', reject);
}); };
exports.Get = function (url) { return new Promise(function (resolve, reject) {
    https_1.default
        .get(url, resolve)
        .on('error', reject);
}); };
