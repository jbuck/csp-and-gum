var fs = require("fs"),
    http = require("http");

var headers = {
  "/": {
    "Content-Type": "text/html; charset=utf-8"
  },
  "/gum.js": {
    "Content-Type": "text/javascript; charset=utf-8"
  },
  "/none.html": {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'; script-src 'self'; media-src 'none'"
  },
  "/self.html": {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'; script-src 'self'; media-src 'self'"
  },
  "/blob.html": {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'; script-src 'self'; media-src blob:"
  },
  "/mediastream.html": {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'; script-src 'self'; media-src mediastream:"
  },
  "/mediastream-and-self.html": {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'; script-src 'self'; media-src 'self' mediastream:"
  },
  "/star.html": {
    "Content-Type": "text/html; charset=utf-8",
    "Content-Security-Policy": "default-src 'none'; script-src 'self'; media-src *"
  },
};
var port = process.env.PORT || 8080;

http.createServer(function(req, res) {
  if (!headers[req.url]) {
    res.writeHead(404);
    res.end("404 Not Found");
    return;
  }

  res.writeHead(200, headers[req.url]);

  if (req.url === "/gum.js") {
    fs.createReadStream("gum.js").pipe(res);
  } else {
    fs.createReadStream("index.html").pipe(res);
  }
}).listen(port);

console.log("server running on http://localhost:%d", port);
