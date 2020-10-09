const extractUrlFromPath = require('./utils');

const getStat = path => {
    const url = extractUrlFromPath(path);
    return {
        name: 'index.html',
        dev: 3405419068,
        mode: 33206,
        nlink: 1,
        uid: 0,
        gid: 0,
        rdev: 0,
        blksize: 4096,
        ino: 3377699727276854,
        size: 32 + url.length,
        blocks: 0,
        atimeMs: Date.now(),
        mtimeMs: Date.now(),
        ctimeMs: Date.now(),
        birthtimeMs: Date.now(),
        atime: new Date(),
        mtime: new Date(),
        ctime: new Date(),
        birthtime: new Date(),
        isDirectory: () => false
    }
}

module.exports = getStat;
