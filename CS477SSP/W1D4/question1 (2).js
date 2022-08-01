"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");

http
  .createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      fs.createReadStream(path.join(__dirname, "home.html")).pipe(res);
    } else if (req.url === "/home" && req.method === "POST") {
      //save to file
      const body = [];

      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        const str = Buffer.concat(body).toString();
        console.log(str);
        fs.writeFile("blog.txt", str, (err) => {
          if (!err) {
            res.end(`<html>
            <body>
            save successfully <br>
            <a href="/">http://localhost:3000</a> </body>
            </html>`);
          } else {
            res.end("Try again");
          }
        });
      });
    } else {
      res.end("others....");
    }
  })
  .listen(3000, () => console.log("loading 3000"));
