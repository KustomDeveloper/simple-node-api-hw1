/*
*    Simple Node API
*/

// Dependencies
const http = require('http');
const port = 3000;

// Create Server
http.createServer(function (req, res) {
    // Default route
    if('/' == req.url) {
      res.writeHead(200, { 'Content-Type' : 'text/html'});
      res.end('Welcome to my app.');

    // Hello route 
    } else if ('/hello' == req.url) {
        res.writeHead(200, { 'Content-Type' : 'text/html'});
        let message = {'message' : 'Hello, welcome to my app.'};
        res.write(JSON.stringify(message));
        res.end();

    // Not found route
    } else {
      res.writeHead(200, { 'Content-Type' : 'text/html'});
      let message = {'error' : 'page not found'};
      res.write(JSON.stringify(message));
      res.end();
      
    }
  console.log('App is started on port: ' + port);
}).listen(port);
