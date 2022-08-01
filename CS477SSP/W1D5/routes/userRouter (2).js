"use strict";

const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/user", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "sample.html"));
  //   next();
});

router.post("/user", (req, res, next) => {
  console.log(req.body);
  res.send("save user successfully");
});

router.get("/edit", (req, res) => {
  throw new Error("Error API");
});

router.get("/delete", (req, res) => {
  throw new Error("Delettted ");
});

module.exports = router;
