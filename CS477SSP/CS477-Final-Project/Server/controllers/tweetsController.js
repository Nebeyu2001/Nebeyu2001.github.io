"use strict";
const Tweet = require("../models/tweets");
const Response = require("../models/response");
const User = require("../models/user");
//const { Schema } = require('mongoose')

//this is to post tweets in postman
// exports.save=async(req,res)=>{
//     let {user}=req.body
//     let all = await Tweet.find({})
//    // console.log(all,user,'all');
//     let result = await User.findOne({username:user.username})
//     //console.log("kkkkk.....", result,user);

//     req.body.user= result._id;
//     const tweet= await new Tweet(req.body).save()
//    res.status(201).json(new Response(false,null,tweet))
// }
//for saving the posted tweet from the textarea in the welcomepage browser
exports.save = async (req, res) => {
  let { user } = req.body;
  let all = await Tweet.find({});
  // console.log(all,user,'all');
  let result = await User.findOne({ username: user });
  //console.log("kkkkk.....", result,user);

  req.body.user = result._id;
  const tweet = await new Tweet(req.body).save();
  res.status(201).json(new Response(false, null, tweet));
};

exports.getAll = async (req, res) => {
  const result = await Tweet.find({}).populate("user");
  res.status(200).json(new Response(false, "success", result));
};

//to display the tweets using for loop
// exports.getTweet = async (req, res, next) => {
//     console.log(req.params.username)
//     const dbUser = await User.findOne({username:req.params.username});
//    if(dbUser){
//     let arrFollowing= dbUser.following;

//    console.log(arrFollowing,'arr')
//    console.log("type of arrFollowing....", typeof(arrFollowing));

//    const tweetLists = await Tweet.find({}).populate('user')
//    let result = [];
//     for(let i=0; i<arrFollowing.length; i++){
//         for(let j=0; j< tweetLists.length; j++){
//             if(arrFollowing[i] === tweetLists[j].user.username){
//                result.push(tweetLists[j])
//             }
//         }
//     }

//     result = result.sort((a,b)=> a.created_at > b.created_at ? -1:1);
//     let result10=[];
//     for(let i=0; i<10; i++){
//        result10.push(result[i]);
//     }
//     res.status(200).json(result10)
//     console.log("List of tweets....",result10);

//    }
// }

//forth solution trying to do scroll down page fetch not working.................
exports.getTweet = async (req, res, next) => {
  try {
    let { page, size, username } = req.query;
    // console.log( page, size ,username, "checking queries......")
    if (!page) {
      page = 1;
    }
    if (!size) {
      size = 1;
    }
    const limit = size;
    const skip = (page - 1) * size;
    const dbUser = await User.findOne({ username });
    if (dbUser) {
      let arrFollowing = dbUser.following;

      //console.log(arrFollowing,'arr')
      let followerId = [];
      //let pageResult ={lastPage:true,tweetLists:[]}
      for (let each of arrFollowing) {
        let result = (
          await User.find({ username: each }).select({
            username: 0,
            password: 0,
            following: 0,
            __v: 0,
          })
        )[0]._id;
        followerId.push(result);
      }
      //console.log(followerId)
      //const count = await Tweet.find().where('new objectId(_id)').in(followerId).count()
      //console.log(count,'count of the collection....')
      const tweetLists = await Tweet.find()
        .where("new objectId(_id)")
        .in(followerId)
        .sort({ created_at: "desc" })
        .skip(skip)
        .limit(limit)
        .populate("user");
      //console.log("type of arrFollowing....", typeof(arrFollowing));

      //const tweetLists = await Tweet.find({}).sort({created_at:-1}).skip((req.params.page-1)*10).limit(10).populate('user');
      //(req.params.page-1)
      res.status(200).json(tweetLists);
      //console.log("List of tweets....",tweetLists);
    }
  } catch (error) {
    res.sendStatus(500).send(error.message);
  }
};

//The solution with .......
// exports.getTweet = async (req, res, next) => {
//     // console.log(req.params.username)
//     // const dbUser = await User.findOne({username:req.params.username});
//     //console.log(req.params.username)
//     const dbUser = await User.findOne({username:req.query.username});
//    if(dbUser){
//     let arrFollowing= dbUser.following;

//    //console.log(arrFollowing,'arr')
//    let followerId = [];

//    for (let each of arrFollowing){
//     let result = (await User.find({username: each}).select({username: 0, password: 0, following: 0, __v:0}))[0]._id
//       followerId.push(result)
//    }
//    console.log(followerId)
//  const tweetLists = await Tweet.find().where('new objectId(_id)').in(followerId).sort({created_at: 'desc'}).limit(10).populate('user')

//  //const tweetLists = await Tweet.find().where('new objectId(_id)').in(followerId).sort({created_at: 'desc'}).skip(req.params.page-1*10).limit(10).populate('user')
//  //console.log("type of arrFollowing....", typeof(arrFollowing));

//    //const tweetLists = await Tweet.find({}).sort({created_at:-1}).skip((req.params.page-1)*10).limit(10).populate('user');
//    //(req.params.page-1)
//     res.status(200).json(tweetLists)
//     //console.log("List of tweets....",tweetLists);

//    }
// }

// //to display the tweets from the database
// exports.getTweet = async (req, res, next) => {
//     console.log(req.params.username)
//     const dbUser = await User.findOne({username:req.params.username});
//    if(dbUser){
//     let arrFollowing= dbUser.following;

//    console.log(arrFollowing,'arr')
//    console.log("type of arrFollowing....", typeof(arrFollowing));

//    const tweetLists = await Tweet.find({}).sort({created_at:-1}).skip((req.params.page-1)*10).limit(10).populate('user');
//    //(req.params.page-1)
//     res.status(200).json(tweetLists)
//     console.log("List of tweets....",tweetLists);

//    }
// }

//exports.getTweet = async (req, res, next) => {
//console.log(req.params.username)
//const dbUser = await User.findOne({username:req.params.username});
//if(dbUser){
// let arrFollowing= dbUser.following;

//console.log(arrFollowing,'arr')
//console.log("yyyyyyyyyy", typeof(arrFollowing));
// let follower=arrFollowing[1]
//console.log(follower,'foloower 34')
//const tweets = await Tweet.find({user:{username:follower}}).limit(1)

// const tweetLists = await Tweet.find({}).populate('user')
// .flter(user=>user.username).
//     sort({date: 'desc' }).skip(page*10).limit(10)

//console.log(typeOf(tweetLists))

//db.inventory.find( { quantity: { $in: [ 5, 15 ] } }, { _id: 0 } )

//res.status(200).json(tweetLists)

// }
//}
