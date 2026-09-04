const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url !== "/" || req.method !== "GET") {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not found");
        return;
    }

    fs.readFile("manu.txt", "utf-8", (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ msg: err.message }));
            return;
        }

        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(data);
    });
});

server.listen(4000);