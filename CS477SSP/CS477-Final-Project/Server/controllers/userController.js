"use strict";
const User = require("../models/user");
const Response = require("../models/response");

exports.getUser = async (req, res, next) => {
  const result = await User.findOne({ username: req.params.username });
  res.status(200).json(new Response(false, "success", result));
};
exports.getAll = async (req, res) => {
  const result = await User.find({});
  res.status(200).json(new Response(false, "success", result));
};
exports.signup = async (req, res, next) => {
  const { username, password } = req.body;

  if (username && password) {
    let user;
    if (password.length > 8) {
      try {
        user = await new User(req.body).save();
        res.status(201).json(new Response(false, null, user));
      } catch (error) {
        res
          .status(400)
          .json(new Response(true, "Please Provide unique username", null));
      }
    } else {
      res
        .status(400)
        .json(
          new Response(true, "password must be minimum eight characters", null)
        );
    }
  } else {
    res
      .status(400)
      .json(new Response(true, "Please Provide username and password ", null));
  }
};
exports.updated = async (req, res, next) => {
  //   let  para=req.params.username
  //  let  following=req.body;
  console.log(req.body);
  const result = await User.findOneAndUpdate(
    { username: req.params.username },
    req.body
  );
  //  await result.save()
  res.status(200).json(new Response(false, "success", result));
};
