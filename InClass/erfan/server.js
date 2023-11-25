const http = require('http');
const yechizdige = require('./modules/logger')

const port = 8080;

http.createServer(function (req, res) {
    yechizdige.log(new DataTransfer(), req.headers.unchiz);
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({name: 'reza', last: 'rezaee'}));
}).listen(port);

console.log(`server listening on ${port}`);