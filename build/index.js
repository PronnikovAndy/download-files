"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var downloadFile_1 = __importDefault(require("./downloadFile"));
var _a = process.argv.slice(2), url = _a[0], downloadDir = _a[1];
console.log("url", url);
console.log("downloadDir", downloadDir);
if (!fs_1.default.existsSync(path_1.default.resolve(downloadDir))) {
    fs_1.default.mkdirSync(path_1.default.resolve(downloadDir));
}
downloadFile_1.default(url, downloadDir);
