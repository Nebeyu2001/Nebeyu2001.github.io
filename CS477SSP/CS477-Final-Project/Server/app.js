const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const userRouter = require('./routes/userRouter');
const tweeteRouter=require('./routes/tweetRouter');
const authRouter=require('./routes/authRouter');

const app = express();

app.use(cors());
app.use(express.json()); 

app.use('/users', userRouter);
app.use('/tweets', tweeteRouter);
app.use('/login', authRouter)

app.use((req, res, next) => {

    res.status(404).send({ error: 'API NOT SUPPORTED' });
});

app.use((err, req, res, next) => {
    res.status(500).send({error: err.message});
});

mongoose.connect('mongodb://127.0.0.1:27017/tweetr')
    .then(() => {
        app.listen(3000);
    });

