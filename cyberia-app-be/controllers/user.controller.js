const User = require('../repositories/user.repository');
const Post = require('../repositories/post.repository');

exports.create = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    user = new User(
        req.body.user.username,
        req.body.user.email,
        req.body.user.session_id
    );

    User.create(user, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        post = new Post(
            req.body.post.subject,
            req.body.post.description,
            data.id
        );

        Post.create(post, (err, data) =>{

            if(err){
                res.status(500).send(err);
            }
            
            res.status(200).send('Post and User created!');
        })
        
    });
}


exports.findById = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    User.findById(req.params.id, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.getAll = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    User.getAll((err, data) =>{

        if(err){
            res.status(500).send(err);
        }


        res.status(200).send(data);
    })
}


exports.update = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }

    user = new User(
        req.body.id,
        req.body.username,
        req.body.email,
        req.body.session_id
    );

    User.update(user, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}



exports.removeById = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }


    User.removeById(req.params.id, (err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}


exports.remove = (req, res) =>{

    if(!req){
        res.status(400).send('Request cannot be empty!');
    }


    User.remove((err, data) =>{

        if(err){
            res.status(500).send(err);
        }

        res.status(200).send(data);
    });
}