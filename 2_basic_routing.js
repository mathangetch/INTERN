//Basic Routing 
// To test terminal --> node Filename.js
let http = require("http");
let port = process.env.port || 4142;

//API for 3 pages using if condition 
/*
let server = http.createServer(function texting(req, res) {
  if (req.url === "/") {
    res.setHeader("content-type", "text");
    res.end("1st page");
  } else if (req.url == "/admin") {
    res.setHeader("content-type", "application/json");
    res.end(
      JSON.stringify({ text: "Hello", numbers: [1, 2, 3, 4, 5, 6, 7, 8] })
    );
  } else {
    res.setHeader("content-type", "application/json");
    res.end("404 not found");
  }
});
server.listen(port);
console.log("2nd fire");
*/

// API writen using function condition

function home(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("hi");
}
function admin(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ text: "hi", numbers: [1, 2, 3] }));
}
function admin2(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Welcome</h1>");
  }
function notin(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.end("404 Not Found");
}

const server = http.createServer(function (req, res) {
  if (req.url === "/") return home(req, res);
  if (req.url === "/admin1") return admin(req, res);
  if (req.url === "/admin2") return admin2(req, res);
  notin(req, res);
});

server.listen(port);
console.log("2nd fire");
