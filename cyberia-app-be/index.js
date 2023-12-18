require('dotenv').config();
var express = require('express');
var session = require('express-session');
const postRouter = require('./routes/post.route');
const userRouter = require('./routes/user.route');
const commentRouter = require('./routes/comment.route');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, sameSite: 'lax', httpOnly: true }
}));


// ROUTES
app.use('/api/post', postRouter);
app.use('/api/user', userRouter);
app.use('/api/comment', commentRouter);


var server = app.listen(process.env.PORT || 5000, "127.0.0.1", ()=> {
    var host = server.address().address;
    var port = server.address().port;
    console.log(`Server start on: http://%s:%s`, host, port);
});