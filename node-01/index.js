var http = require('http');
var port = 8000;

var server = http.createServer((request, response) => {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
     // 发送响应数据 "Hello World"
    response.end('herllo world');
})

server.listen(port);

console.log('app is running!');