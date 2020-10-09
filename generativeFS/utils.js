
const extractUrlFromPath = path => {
    if (path.length < 6) {
        return '';
    }
    if (path.endsWith('.html.html')) {
        path = path.slice(0, path.length - 5);
    }
    while (path.length && ['/', '\\'].includes(path[0])) {
        path = path.slice(1);
    }
    return path;
}

module.exports = extractUrlFromPath;
