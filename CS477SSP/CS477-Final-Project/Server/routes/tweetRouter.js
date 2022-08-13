const express=require('express')
const tweetsController=require('../controllers/tweetsController')
const router= express.Router()
          
router.post('/',tweetsController.save)
router.get('/', tweetsController.getTweet);
// this below route is for the soultion of tweet controller for getweets()
//router.get('/:username/:page', tweetsController.getTweet);
// router.get('/',tweetsController.getAll)
module.exports=router