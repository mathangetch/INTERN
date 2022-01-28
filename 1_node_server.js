// server created with a response
const http = require('http')
const port = process.env.PORT ||4141;
const server = http.createServer((req, res) =>{
    res.end("server running on port 4141");//client response
});
server.listen(port);
console.log("fired");// terminal response
