"use strict";
const express = require("express");
const cors = require("cors");

//import mongoose libray in our application
const mongoose = require("mongoose");

const bookRouter = require("./routes/book");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/books", bookRouter);

app.use((req, res, next) => {
  res.status(404).send({ error: "API NOT SUPPORTED" });
});

app.use((err, req, res, next) => {
  res.status(500).send({ error: err.message });
});

// connect to a MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/shopping").then(() => {
  app.listen(3000, () => console.log("listening mongodb"));
});
