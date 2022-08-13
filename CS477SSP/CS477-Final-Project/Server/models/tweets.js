const mongoose=require('mongoose')
const {Schema}= mongoose;


const tweetSchema= new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
        },
    tweet: String,
    created_at: {type:Date, default:Date.now}

    
    // users:[
    //        {
    //         type: Schema.Types.ObjectId,
    //         ref: 'User'
    //        }
    //     ],
    // tweet:String,
    // created_at: {type:Date, default: Date.now}
})
module.exports=mongoose.model('Tweets',tweetSchema)