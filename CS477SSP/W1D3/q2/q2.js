"use strict";

const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req, res) => {
  // res.end(fs.readFileSync("sunflower.jpg"));
  fs.readFile("sunflower.jpg", function (err, data) {
    if (err) {
      res.end("Whoops");
    } else {
      res.end(data);
    }
  });
  // fs.createReadStream("sunflower.jpg").pipe(res);
});

server.listen(3000, () => console.log("3000...."));
