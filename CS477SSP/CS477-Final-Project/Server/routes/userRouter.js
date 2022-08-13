const express=require('express')
const userController=require('../controllers/userController')
const router= express.Router()


router.get('/:username',userController.getUser);
router.post('/',userController.signup);
router.get('/',userController.getAll);
//to update the following
router.put('/:username/:updated',userController.updated);
//to display Tweets


module.exports=router