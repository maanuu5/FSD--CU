const fs = require("fs");
const http = require("http");
const path = require("path");

const port = 3001;
const publicDirectory = path.join(__dirname, "public");
const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
    return;
  }

  const requestedPath = new URL(req.url, `http://${req.headers.host}`).pathname;
  const relativePath = requestedPath === "/" ? "/index.html" : requestedPath;
  const filePath = path.resolve(publicDirectory, `.${relativePath}`);

  if (!filePath.startsWith(`${publicDirectory}${path.sep}`)) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("File Not Found");
    return;
  }

  fs.readFile(filePath, (error, file) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("File Not Found");
      return;
    }

    const extension = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      "Content-Type": mimeTypes[extension] || "application/octet-stream",
    });
    res.end(file);
  });
});

server.listen(port, () => {
  console.log(`Static file server running at http://localhost:${port}`);
});
