const path = require('path');
const string2fileStream = require('string-to-file-stream');
const generateFile = require('./generateFile');
const getStat = require('./stat');

class GenerativeFS {
    constructor() {
        this.cwd = path.normalize(path.sep);
        this._root = path.resolve(process.cwd());
    }

    get root() {
        return this._root;
    }
  
    currentDirectory() {
        return this.cwd;
    }

    get(fileName) {
        return Promise.resolve(getStat(fileName));
    }

    list(path = '.') {
        return Promise.resolve(null);
    }

    chdir(path = '.') {
        return Promise.resolve('Directory successfully changed');
    }

    write(fileName, {append = false, start = undefined} = {}) {
        return {
            stream: null,
            clientPath: fileName,
        };
    }

    read(fileName, { start = undefined } = {}) {
        const fileContent = generateFile(fileName);
        console.log('------ Send: ', fileContent);
        return Promise.resolve({
            stream: string2fileStream(fileContent),
            clientPath: fileName,
        });
    }
    
    delete(path) {
        return Promise.reject(`Unable to delete file "${path}"`);
    }

    mkdir(path) {
        return Promise.reject(`Unable to create directory "${path}"`);
    }

    rename(from, to) {
        return Promise.reject(`Unable to rename file "${from}"`);
    }

    chmod(path, mode) {
        return Promise.reject(`Unable to change permissions of the file "${path}"`)
    }

    getUniqueName() {
        return Math.random().toString(16).substring(2);
    }
}

module.exports = GenerativeFS;
