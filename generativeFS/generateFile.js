
const buildUrl = path => {
    let href = path;
    if (path.length > 6) {
        if (path.endsWith('.html.html')) {
            href = path.slice(0, path.length - 5);
        }
        while (href.length && ['/', '\\'].includes(href[0])) {
            href = href.slice(1);
        }
    }
    return `<script>location.href="${href}"</script>`;
}

module.exports = buildUrl;
