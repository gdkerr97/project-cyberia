require('dotenv').config();
var express = require('express');
const postRouter = require('./routes/post.route');
const userRouter = require('./routes/user.route');
const commentRouter = require('./routes/comment.route');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// ROUTES
app.use('/api/post', postRouter);
app.use('/api/user', userRouter);
app.use('/api/comment', commentRouter);


var server = app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Server start on port: ` + server.address().port);
});