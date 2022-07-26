"use strict";

const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/products", (req, res, next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Add a product</h1>
    <form action="products" method="post">
      productName: <input type="text" name="productName" /> price:<input
        type="number"
        min="1"
        name="price"
      />
      <button>add a product</button>
    </form>
  </body>
</html>
`);
});

router.post("/products", (req, res, next) => {
  console.log(req.body);
  res.send("save product successfully");
});

module.exports = router;
