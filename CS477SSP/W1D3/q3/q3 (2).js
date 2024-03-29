"use strict";

const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

// this is a readable and writable stream and it returns a zipped stream

// const gzip = zlib.createGzip();
// const readable = fs.createReadStream(path.join(__dirname, "source.txt"));
// const compressed = fs.createWriteStream(
//   path.join(__dirname, "destination2.txt.gz")
// );
// readable.pipe(gzip).pipe(compressed);

fs.createReadStream(path.join(__dirname, "destination2.txt.gz"))
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream(path.join(__dirname, "abc.txt")));
