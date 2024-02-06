const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
console.log("The Server is listening the port no: ",port);

