"use strict";
const express = require("express");
const cors = require("cors");

const bookRouter = require("./routes/book");
const { mongoConnect } = require("./util/database");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/books", bookRouter);
app.use((req, res, next) => {
  res.status(404).send({ error: "API NOT SUPPORTED" });
});

mongoConnect(() => {
  app.listen(3000, () => console.log("listening mongodb"));
});
