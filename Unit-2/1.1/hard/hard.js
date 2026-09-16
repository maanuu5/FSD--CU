const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3001;
const PUBLIC_DIR = path.join(__dirname, "public");

const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("405 Method Not Allowed");
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || "localhost"}`);
  let safePath = parsedUrl.pathname;
  if (safePath === "/") {
    safePath = "/index.html";
  }

  const filePath = path.normalize(path.join(PUBLIC_DIR, safePath));

  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("403 Forbidden");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      if (err.code === "ENOENT" || err.code === "EISDIR") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found: The requested resource does not exist.");
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("500 Internal Server Error");
      }
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";

    res.writeHead(200, { "Content-Type": contentType });
    if (req.method === "HEAD") {
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Hard Static File Server running at http://localhost:${PORT}`);
  console.log(`Serving static assets from ${PUBLIC_DIR}`);
});
