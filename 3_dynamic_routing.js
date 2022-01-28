//Dynamic Routing
// To test terminal --> node Filename.js
let http = require("http");
const url = require("url");
const querystring = import("querystring");
//let querystring = require("querystring");
let port = process.env.port || 4142;

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
function endpoint(req, res) {
  const { input = "  " } = url.parse(
    req.url,true).query;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      normal: input,
      shouty: input.toUpperCase(),
      charcount: input.length(),
      back: input.split(" ").reverse().join(" "),
    })
  );
}

let server = http.createServer(function (req, res) {
  if (req.url === "/") return home(req, res);
  if (req.url === "/admin1") return admin(req, res);
  if (req.url === "/admin2") return admin2(req, res);
  if (req.url.match(/endpoint/)) return endpoint(req, res);
  notin(req, res);
});

server.listen(port);
console.log("3rd boot");

