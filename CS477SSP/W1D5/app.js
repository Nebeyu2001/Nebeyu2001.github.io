"use strict";

const http = require("http");

const path = require("path");

const express = require("express");

const userRouter = require("./routes/userRouter");
const productRouter = require("./routes/productRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use("/styleCss", express.static(path.join(__dirname)));

app.use(userRouter);

app.use(productRouter);

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.use((err, req, res, next) => {
  res.status(500).send("whoops");
});

app.listen(3000, () => console.log("listening 3000"));
