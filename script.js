const http = require('http');
const express = require('express');
const app = express();

let routes = require('./controller/dinner')

let port  = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

const requestListener = function (req, res) {
     res.writeHead(200);
     res.end('Hello World!');
}

app.use(routes)

const server = http.createServer(requestListener);

server.listen(port);