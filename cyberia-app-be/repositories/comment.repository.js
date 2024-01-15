var db = require('./db');
const Comment = require('../models/comment');

Comment.create = function(newComment, result){

    db.query('INSERT INTO comments SET ?', newComment, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        console.log({id: res.insertId, ...newComment});
        result(null, {id: res.insertId, ...newComment});
    });
}


Comment.findById = function(id, result){
    db.query('SELECT * FROM comments WHERE id = ?', id, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;            
        }

        if(res.length){
            result(null, res[0]);
            return;
        }

        result(null, {kind: 'Comment not found!'});
    });
}


Comment.getAll = function(result){

    db.query('SELECT * FROM comments', (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }


        if(res.length){
            result(null, res);
            return;
        }

        result(null, {kind: 'No comments found!'});
    });
}



Comment.update = function(newComment, result){

    db.query('UPDATE comments SET ? WHERE id = ?', [newComment, newComment.id], (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'No comment found'});
            return;
        }

        result(null, res);
    });
}


Comment.removeById = function(id, result){

    db.query('DELETE FROM comments WHERE id = ?', id, (err, res) =>{

        if(err){
            console.log(err);
            result(err,null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'Comment not found!'});
            return;
        }

        result(null, {message: 'Comment deleted!'});
    });
}


Comment.remove = function(result){
    db.query('DELETE FROM comments', (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result(null, {kind: 'Comments not found!'});
            return;
        }


        result(null, {message:'All comments deleted!'});
    });
}


module.exports = Comment;