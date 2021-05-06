var http = require('http');
var express=require('express');
var fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' });
  fs.createReadStream('index.html').pipe(res);
}).listen(process.env.PORT || 3000);