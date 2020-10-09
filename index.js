const path = require('path');
const GenerativeFS = require('./generativeFS/fs');

const fs = new GenerativeFS();

const FtpSrv = require('ftp-srv');
const ftpServer = new FtpSrv({
    url: 'ftp://0.0.0.0:21',
    anonymous: true,
    pasv_url: 'ftp://0.0.0.0:21',
});

ftpServer.on('login', (data, resolve, reject) => {
    resolve({fs});
});

ftpServer.listen()
.then(() => {
    console.log('ftp server has been started!');
});
