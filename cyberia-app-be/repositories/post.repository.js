var db = require('./db');
const Post = require('../models/post');

Post.create = function(newPost, result) {
    db.query('INSERT INTO posts SET ?', newPost, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        result(null, {id: res.insertId, ...newPost});
    });
};


Post.getAll = function(result){
    db.query('SELECT * FROM posts', (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        result(null, res);
    });
}


Post.findById = function(id, result){
    db.query('SELECT * FROM posts WHERE id = ?', id, (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.length){
            result(null, res[0]);
            return;
        }

        result({kind: 'Not found'}, null);
    })
}


Post.update = function(newPost, result){
    db.query('UPDATE posts SET ? WHERE id = ?', [newPost, newPost.id], (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result({kind: 'Not found!'}, null);
            return;
        }

        result(null, res);
    });
}


Post.remove = function(id, result){
    db.query('DELETE FROM posts WHERE id = ?', id, (err, res) =>{
        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result({kind: 'Not found!'}, null);
            return;
        }

        result(null, {message: 'Element with id: ' + id + 'Removed'});
    })
}



Post.removeAll = function(result){
    db.query('DELETE FROM posts', (err, res) =>{

        if(err){
            console.log(err);
            result(err, null);
            return;
        }

        if(res.affectedRows == 0){
            result({kind: 'Not found!'}, null);
            return;
        }

        console.log('Removed all elements');
        result(null, res);
    })
}



module.exports = Post;