const GenerativeFS = require('./generativeFS/fs');

const fs = new GenerativeFS();

const port = process.env.PORT || '3855';

const FtpSrv = require('ftp-srv');
const ftpServer = new FtpSrv({
    url: 'ftp://0.0.0.0:' + port,
    anonymous: true,
    pasv_url: 'ftp://0.0.0.0:' + port,
    logLevel: 'trace',
});

ftpServer.on('login', (data, resolve, reject) => {
    resolve({fs});
});

ftpServer.listen()
.then(() => {
    console.log('ftp server has been started!');
});
